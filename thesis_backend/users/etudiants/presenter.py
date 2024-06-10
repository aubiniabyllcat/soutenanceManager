from dataclasses import dataclass
from typing import List

from database import AsyncSessionLocal
from users.auth.exceptions import AuthExceptions
from users.auth.interfaces.password_service_interface import PasswordServiceInterface
from users.auth.interfaces.repositories_interface import UserRepositoriesInterface
from .schemas import EtudiantSchema, UpdateEtudiantSchema, CreateEtudiantSchema
from .interfaces.repositories_interface import EtudiantRepositoriesInterface
from .exceptions import EtudiantExceptions
from sqlalchemy.exc import SQLAlchemyError


@dataclass
class EtudiantPresenter:
    repository: EtudiantRepositoriesInterface
    user_repository: UserRepositoriesInterface
    password_service: PasswordServiceInterface  


    async def get_etudiants(self,  limit: int, offset: int):
        data = { 'limit': limit, 'offset': offset}
        return await self.repository.get_etudiants(**data)

    # async def create_etudiant(self, etudiant_data: CreateEtudiantSchema):
    #     data = { 'etudiant_data': etudiant_data}
    #     return await self.repository.create_etudiant(**data)

    async def create_enseignant(self, etudiant_data: CreateEtudiantSchema):
        async with AsyncSessionLocal() as session:
            utilisateur_id = None  # Initialiser utilisateur_id à None
            try:
                async with session.begin_nested():
                    # Vérifier si l'utilisateur existe déjà
                    if await self.user_repository.receive_user_by_username(username=etudiant_data.username):
                        raise AuthExceptions().username_exists
                    
                    # Vérifier si le matricule existe déjà
                    existing_etudiant = await self.repository.get_etudiant(etudiant_slug=etudiant_data.matricule)
                    if existing_etudiant:
                        raise EtudiantExceptions().etudiant_exists
                    
                    # Hacher le mot de passe
                    hashed_password = await self.password_service.hashed_password(password=etudiant_data.password)

                    # Enregistrer l'utilisateur et récupérer l'utilisateur_id
                    utilisateur_id = await self.user_repository.save_user(
                        username=etudiant_data.username,
                        password=hashed_password,
                        nom=etudiant_data.nom,
                        prenoms=etudiant_data.prenoms,
                        role_id=1  # Role ID pour étudiant
                    )
                    print(f"Utilisateur {etudiant_data.username} enregistré avec succès. ID Utilisateur: {utilisateur_id}")

                    # Créer l'étudiant avec l'ID de l'utilisateur
                    etudiant_creation_data = {
                        'matricule': etudiant_data.matricule,
                        'filiere_id': etudiant_data.filiere_id,
                        'annee_id': etudiant_data.annee_id,
                        'utilisateur_id': utilisateur_id
                    }
                    await self.repository.create_etudiant(etudiant_creation_data)
                    print(f"Étudiant créé avec succès pour l'utilisateur {etudiant_data.username}.")

                # Si tout s'est bien passé, committer la transaction
                await session.commit()

            except SQLAlchemyError as e:
                print("Il y a eu une erreur:", e)
                # Annuler la transaction en cas d'erreur
                await session.rollback()
                raise e
            except Exception as e:
                print("Une erreur inattendue est survenue:", e)
                # Annuler la transaction en cas d'erreur
                await session.rollback()
                raise e

    async def delete_etudiant(self, etudiant_slug: str):
        data = { 'etudiant_slug': etudiant_slug}
        if not await self.repository.delete_etudiant(**data):
            raise EtudiantExceptions().etudiant_not_found

    async def update_etudiant(self, etudiant_slug: str, updated_data: UpdateEtudiantSchema):
        if updated_data.is_empty:
            raise EtudiantExceptions().empty_data
        return await self.repository.update_etudiant(
             etudiant_slug=etudiant_slug, updated_data=updated_data
        )

    async def get_etudiant(self, etudiant_slug: str):
        data = {'etudiant_slug': etudiant_slug}
        if (result := await self.repository.get_etudiant(**data)) is None:
            raise EtudiantExceptions().etudiant_not_found
        return result

    async def get_etudiants_by_filiere(self, filiere_id: int, limit: int, offset: int) -> List[EtudiantSchema]:
        return await self.repository.get_etudiants_by_filiere(filiere_id, limit, offset)