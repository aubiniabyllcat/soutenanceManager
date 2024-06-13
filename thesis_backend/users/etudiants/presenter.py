from dataclasses import dataclass
from typing import List

from database import AsyncSessionLocal
from users.auth.service_email import send_email
from users.auth.exceptions import AuthExceptions
from users.auth.interfaces.password_service_interface import PasswordServiceInterface
from users.auth.interfaces.repositories_interface import UserRepositoriesInterface
from .schemas import EtudiantSchema, FiliereSchema, UpdateEtudiantSchema, CreateEtudiantSchema
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

    async def create_etudiant(self, etudiant_data: CreateEtudiantSchema):
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
                        email=etudiant_data.email,
                        password=hashed_password,
                        nom=etudiant_data.nom,
                        prenoms=etudiant_data.prenoms,
                        role_id=2  # Role ID pour étudiant
                    )
                    print(f"Utilisateur {etudiant_data.username} enregistré avec succès. ID Utilisateur: {utilisateur_id}")

                    # Créer l'etudiant avec l'ID de l'utilisateur
                    etudiant_creation_data = {
                        'matricule': etudiant_data.matricule,
                        'filiere_id': etudiant_data.filiere_id,
                        'annee_id': etudiant_data.annee_id,
                        'utilisateur_id': utilisateur_id
                    }
                    await self.repository.create_etudiant(etudiant_creation_data)
                    print(f"Etudiant créé avec succès pour l'utilisateur {etudiant_data.username}.")

                # Si tout s'est bien passé, committer la transaction
                await session.commit()
               
            
                # Envoyer l'e-mail de bienvenue après la création réussie de l'étudiant
                app_name = "SoutenanceManager"
                subject = "Invitation à SoutenanceManager"
                subject_with_app = f"[{app_name}] {subject}"
                login_url = "http://localhost:3000/login"  # Remplacez par l'URL réelle de votre système de gestion
                body = f"""
                    <html>
                        <head>
                            <title>Invitation</title>
                            <style>
                                body {{
                                    font-family: Arial, sans-serif;
                                    background-color: #f5f5f5;
                                }}
                                .container {{
                                    max-width: 600px;
                                    margin: 0 auto;
                                    padding: 20px;
                                    background-color: #fff;
                                    border: 1px solid #ccc;
                                    border-radius: 5px;
                                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                                }}
                                .header {{
                                    background-color: #007bff;
                                    color: white;
                                    padding: 10px;
                                    text-align: center;
                                    font-weight: bold;
                                    border-top-left-radius: 5px;
                                    border-top-right-radius: 5px;
                                }}
                                .button {{
                                    display: inline-block;
                                    background-color: #007bff;
                                    color: white;
                                    padding: 10px 20px;
                                    text-decoration: none;
                                    border-radius: 5px;
                                    transition: background-color 0.3s ease;
                                }}
                                .button:hover {{
                                    background-color: #0116b3;
                                }}
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <div class="header">{app_name}</div>
                                <h2>Bienvenue dans le Système de Gestion des Soutenances</h2>
                                <p>Bonjour {etudiant_data.username},</p>
                                <p>Vous avez été ajouté au Système de Gestion des Soutenances. Vous pouvez maintenant vous connecter pour préparer votre soutenance.</p>
                                <p>Pour commencer, veuillez cliquer sur le bouton ci-dessous :</p>
                                <a href="{login_url}" class="button">Se connecter</a>
                                <p>Cordialement,<br>L'équipe administrative de {app_name}</p>
                            </div>
                        </body>
                    </html>
                """
                await send_email(etudiant_data.email, subject_with_app, body, app_name)
                raise EtudiantExceptions().etudiant_create
            
            except SQLAlchemyError as e:
                print("Il y a eu une erreur:", e)
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
    
    
    async def get_filieres(self) -> List[FiliereSchema]:
        filieres = await self.repository.get_filieres()
        return [FiliereSchema.from_orm(filiere) for filiere in filieres]