from abc import ABC, abstractmethod
from ..schemas import CreateStageSchema, UpdateStageSchema


class StageRepositoriesInterface(ABC):

    @abstractmethod
    async def get_channels(self, customer_id: int, limit: int, offset: int):
        pass

    @abstractmethod
    async def create_channel(
            self, customer_id: int, channel_data: CreateStageSchema):
        pass

    @abstractmethod
    async def delete_channel(self, customer_id: int, channel_slug: str):
        pass

    async def update_channel(
            self, customer_id: int, channel_slug: str,
            updated_data: UpdateStageSchema
    ):
        pass

    @abstractmethod
    async def get_channel(self, channel_slug: str):
        pass

    
    