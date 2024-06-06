from dataclasses import dataclass
from sqlalchemy.ext.asyncio import AsyncSession, AsyncResult
from sqlalchemy import select, insert, delete, update
from sqlalchemy.orm import subqueryload

from users.auth.models import Enseignant, Users
from .schemas import CreateEnseignantSchema, UpdateEnseignantSchema
from .exceptions import EnseignantExceptions
from .interfaces.repositories_interface import EnseignantRepositoriesInterface


@dataclass
class EnseignantRepositories(EnseignantRepositoriesInterface):
    session: AsyncSession
    
    async def get_enseignants(self, limit: int, offset: int):
        stmt = select(Enseignant) \
            .order_by(Enseignant.created.desc()) \
            .limit(limit) \
            .offset(offset)
        result = await self.session.execute(stmt)
        return result.scalars().all()

    
    async def create_enseignant(self, enseignant_data: CreateEnseignantSchema):
        values = {
    
            'slug': enseignant_data.matricule,
            **enseignant_data.dict(exclude_none=True)
        }
        stmt = insert(Enseignant).values(**values).returning(Enseignant)
        result = await self.session.execute(statement=stmt)
        await self.session.commit()
        return result.scalar_one()
    
    async def delete_enseignant(self, enseignant_slug: str):
        
        enseignant = await self.get_enseignant(enseignant_slug)
        if not enseignant:
            raise EnseignantExceptions().enseignant_not_found
    
        # Récupérer l'utilisateur associé à l'étudiant
        utilisateur_id = enseignant.utilisateur_id
        print(utilisateur_id)
        # Mettre à jour le champ is_active de l'utilisateur à False
        stmt = update(Users).where(Users.id == utilisateur_id).values(is_active=False)
        await self.session.execute(stmt)

        # Supprimer l'étudiant
        stmt = delete(Enseignant).where(Enseignant.slug == enseignant_slug)
        result = await self.session.execute(statement=stmt)
        await self.session.commit()
        return result.rowcount

    async def update_enseignant(self, enseignant_slug: str, updated_data: UpdateEnseignantSchema):
        await self.__check_enseignant(enseignant_slug=enseignant_slug)
        values = {**updated_data.dict(exclude_none=True)}
        if updated_data.matricule:
            values.update({'slug': updated_data.matricule})
            stmt = update(Enseignant).where(Enseignant.slug == enseignant_slug).values(**values).returning(Enseignant)
            result = await self.session.execute(statement=stmt)
        await self.session.commit()
        return result.scalar_one()
    
    async def get_enseignant(self, enseignant_slug: str):
        stmt = select(Enseignant).where(Enseignant.slug == enseignant_slug)
        result: AsyncResult = await self.session.execute(statement=stmt)
        return result.scalars().first()

    async def __check_enseignant(self, enseignant_slug: str):
        if not (enseignant := await self.get_enseignant(enseignant_slug=enseignant_slug)):
            raise EnseignantExceptions().enseignant_not_found
        return enseignant

    async def get_enseignants_by_departement(self, departement_id: int, limit: int, offset: int):
        stmt = select(Enseignant).filter(Enseignant.departement_id == departement_id).offset(offset).limit(limit)
        result = await self.session.execute(stmt)
        return result.scalars().all()