from dataclasses import dataclass
from typing import List
from sqlalchemy.ext.asyncio import AsyncSession, AsyncResult
from sqlalchemy import select, insert, delete, update
from sqlalchemy.orm import subqueryload
from database import Base
from users.auth.models import Etudiant, Filiere, Jury, Users
from .schemas import CreateJurySchema, JurySchema, UpdateJurySchema
from .exceptions import EtudiantExceptions
from .interfaces.repositories_interface import EtudiantRepositoriesInterface


@dataclass
class JuryRepositories(JuryRepositoriesInterface):
    session: AsyncSession
    
    async def get_jurys(self, limit: int, offset: int):
        stmt = select(Jury) \
            .limit(limit) \
            .offset(offset)
        result = await self.session.execute(stmt)
        return result.scalars().all()

    
    async def create_jury(self, jury_data: CreateJurySchema):
        values = {
            'numero': jury_data['numero'],
            'presient_id': jury_data['presient_id'],
            'examinateur_id': jury_data['examinateur_id'],
            'rapporteur_id': jury_data['rapporteur_id']
        }
        stmt = insert(Jury).values(**values).returning(Jury)
        result = await self.session.execute(statement=stmt)
        await self.session.commit()
        return {'detail': f'Jury numéro {jury_data["numero"]} créé avec succès'}
    
    async def delete_jury(self, numero: int):
        # Récupérer le jury à supprimer
        jury = await self.get_jury(numero)
        if not jury:
            raise JuryExceptions().jury_not_found

        # Supprimer le jury
        stmt = delete(Jury).where(Jury.numero == numero)
        result = await self.session.execute(statement=stmt)
        await self.session.commit()
        return {'detail': f'Jury numéro {numero} supprimé avec succès'}
    
    async def update_jury(self, numero: int, updated_data: UpdateJurySchema):
        await self.__check_jury(numero=numero)
        values = {**updated_data.dict(exclude_none=True)}
        if updated_data.numero:
            values.update({'numero': updated_data.numero})
            stmt = update(Jury).where(Jury.numero == numero).values(**values).returning(Jury)
            result = await self.session.execute(statement=stmt)
        await self.session.commit()
        # return result.scalar_one()
        return {'detail': f'Jury numéro {numero} mise à jour'}
    
    async def get_etudiant(self, num: str):
        stmt = select(Etudiant).where(Etudiant.slug == etudiant_slug)
        result: AsyncResult = await self.session.execute(statement=stmt)
        return result.scalars().first()

    async def __check_etudiant(self, etudiant_slug: str):
        if not (etudiant := await self.get_etudiant(etudiant_slug=etudiant_slug)):
            raise EtudiantExceptions().etudiant_not_found
        return etudiant

    async def get_etudiants_by_filiere(self, filiere_id: int, limit: int, offset: int):
        stmt = select(Etudiant).filter(Etudiant.filiere_id == filiere_id).offset(offset).limit(limit)
        result = await self.session.execute(stmt)
        return result.scalars().all()
    
    
    async def get_filieres(self, limit: int, offset: int):
        stmt = select(Filiere) \
            .limit(limit) \
            .offset(offset)
        result = await self.session.execute(stmt)
        return result.scalars().all()

    async def get_filieres(self):
        result = await self.session.execute(select(Filiere))
        return result.scalars().all()