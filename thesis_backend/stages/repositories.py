from dataclasses import dataclass
from sqlalchemy.ext.asyncio import AsyncSession, AsyncResult
from sqlalchemy import select, insert, delete, update
from sqlalchemy.orm import subqueryload
from .schemas import  CreateStageSchema,  UpdateStageSchema
from .models import  Stage
from .exceptions import  StageExceptions
from .interfaces.repositories_interface import \
    StageRepositoriesInterface


@dataclass
class stageRepositories(StageRepositoriesInterface):
    session: AsyncSession

    async def get_stages(self, etudiant_id: int, limit: int, offset: int):
        
        stmt = select(Stage) \
            .where(Stage.id.in_(stages_ids_query)) \
            .limit(limit) \
            .offset(offset) \
            .order_by(Stage.created.desc())
        result = await self.session.execute(statement=stmt)
        return result.scalars().all()

    async def create_stage(
            self, etudiant_id: int, stage_data: CreateStageSchema):
        values = {
            'owner_id': etudiant_id,
            'slug': stage_data.stage_name,
            **stage_data.dict(exclude_none=True)
        }
        stmt = insert(Stage).values(**values).returning(Stage)
        result = await self.session.execute(statement=stmt)
        await self.session.commit()
        return result.first()

    async def delete_stage(self, etudiant_id: int, stage_slug: str):
        cond = (Stage.owner_id == etudiant_id, Stage.slug == stage_slug)
        stmt = delete(Stage).where(*cond)
        result = await self.session.execute(statement=stmt)
        await self.session.commit()
        return result.rowcount

    async def update_stage(
            self, etudiant_id: int, stage_slug: str,
            updated_data: UpdateStageSchema
    ):
        await self.__check_stage(stage_slug=stage_slug)
        values = {**updated_data.dict(exclude_none=True)}
        if updated_data.stage_name:
            values.update({'slug': updated_data.stage_name})
        cond = (Stage.slug == stage_slug, Stage.owner_id == etudiant_id)
        stmt = update(Stage).where(*cond).values(**values)
        await self.session.execute(statement=stmt)
        await self.session.commit()

    async def get_stage(self, stage_slug: str):
        stmt = select(Stage).where(Stage.slug == stage_slug)
        result: AsyncResult = await self.session.execute(statement=stmt)
        return result.scalars().first()

    async def __check_stage(self, stage_slug: str):
        if not (stage := await self.get_stage(stage_slug=stage_slug)):
            raise StageExceptions().stage_not_found
        return stage

    
    