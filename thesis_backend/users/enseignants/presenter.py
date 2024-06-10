from dataclasses import dataclass
from typing import List

from database import AsyncSessionLocal
from users.auth.exceptions import AuthExceptions
from users.auth.interfaces.password_service_interface import PasswordServiceInterface
from users.auth.interfaces.repositories_interface import UserRepositoriesInterface
from users.etudiants.exceptions import EtudiantExceptions
from .schemas import EnseignantSchema, UpdateEnseignantSchema, CreateEnseignantSchema
from .interfaces.repositories_interface import EnseignantRepositoriesInterface
from .exceptions import EnseignantExceptions
from sqlalchemy.exc import SQLAlchemyError


@dataclass
class EnseignantPresenter:
    repository: EnseignantRepositoriesInterface
    user_repository: UserRepositoriesInterface
    password_service: PasswordServiceInterface

    async def get_enseignants(self,  limit: int, offset: int):
        data = { 'limit': limit, 'offset': offset}
        return await self.repository.get_enseignants(**data)

    # async def create_enseignant(self, enseignant_data: CreateEnseignantSchema):
    #     data = { 'enseignant_data': enseignant_data}
    #     return await self.repository.create_enseignant(**data)
    
    async def create_enseignant(self, enseignant_data: CreateEnseignantSchema):
        async with AsyncSessionLocal() as session:
            utilisateur_id = None  # Initialiser utilisateur_id à None
            try:
                async with session.begin_nested():
                    # Vérifier si l'utilisateur existe déjà
                    if await self.user_repository.receive_user_by_username(username=enseignant_data.username):
                        raise AuthExceptions().username_exists
                    
                    # Vérifier si le matricule existe déjà
                    existing_etudiant = await self.repository.get_enseignant(enseignant_slug=enseignant_data.matricule)
                    if existing_etudiant:
                        raise EnseignantExceptions().enseignant_exists
                    
                    # Hacher le mot de passe
                    hashed_password = await self.password_service.hashed_password(password=enseignant_data.password)

                    # Enregistrer l'utilisateur et récupérer l'utilisateur_id
                    utilisateur_id = await self.user_repository.save_user(
                        username=enseignant_data.username,
                        password=hashed_password,
                        nom=enseignant_data.nom,
                        prenoms=enseignant_data.prenoms,
                        role_id=2  # Role ID pour étudiant
                    )
                    print(f"Utilisateur {enseignant_data.username} enregistré avec succès. ID Utilisateur: {utilisateur_id}")

                    # Créer l'enseignant avec l'ID de l'utilisateur
                    enseignant_creation_data = {
                        'matricule': enseignant_data.matricule,
                        'grade': enseignant_data.grade,
                        'specialite': enseignant_data.specialite,
                        'departement_id': enseignant_data.departement_id,
                        'utilisateur_id': utilisateur_id
                    }
                    await self.repository.create_enseignant(enseignant_creation_data)
                    print(f"Enseignant créé avec succès pour l'utilisateur {enseignant_data.username}.")

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

    async def delete_enseignant(self, enseignant_slug: str):
        data = { 'enseignant_slug': enseignant_slug}
        if not await self.repository.delete_enseignant(**data):
            raise EnseignantExceptions().enseignant_not_found

    async def update_enseignant(self, enseignant_slug: str, updated_data: UpdateEnseignantSchema):
        if updated_data.is_empty:
            raise EnseignantExceptions().empty_data
        return await self.repository.update_enseignant(
             enseignant_slug=enseignant_slug, updated_data=updated_data
        )

    async def get_enseignant(self, enseignant_slug: str):
        data = {'enseignant_slug': enseignant_slug}
        if (result := await self.repository.get_enseignant(**data)) is None:
            raise EnseignantExceptions().enseignant_not_found
        return result

    async def get_enseignants_by_departement(self, departement_id: int, limit: int, offset: int) -> List[EnseignantSchema]:
        return await self.repository.get_enseignants_by_departement(departement_id, limit, offset)