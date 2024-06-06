from dataclasses import dataclass
from typing import List
from .schemas import EnseignantSchema, UpdateEnseignantSchema, CreateEnseignantSchema
from .interfaces.repositories_interface import EnseignantRepositoriesInterface
from .exceptions import EnseignantExceptions


@dataclass
class EnseignantPresenter:
    repository: EnseignantRepositoriesInterface

    async def get_enseignants(self,  limit: int, offset: int):
        data = { 'limit': limit, 'offset': offset}
        return await self.repository.get_enseignants(**data)

    async def create_enseignant(self, enseignant_data: CreateEnseignantSchema):
        data = { 'enseignant_data': enseignant_data}
        return await self.repository.create_enseignant(**data)

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