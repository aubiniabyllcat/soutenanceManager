from dataclasses import dataclass
from .schemas import CreateStageSchema, UpdateStageSchema, CreateStageSchema
from .interfaces.repositories_interface import \
    StageRepositoriesInterface
from .exceptions import StageExceptions


@dataclass
class StagePresenter:
    repository: StageRepositoriesInterface

    async def get_channels(self, customer_id: int, limit: int, offset: int):
        data = {'customer_id': customer_id, 'limit': limit, 'offset': offset}
        return await self.repository.get_channels(**data)

    async def create_channel(
            self, etudiant_id: int, stage_data: CreateStageSchema):
        data = {'etudiant_id': etudiant_id, 'stage_data': stage_data}
        return await self.repository.create_stage(**data)

    async def delete_channel(self, customer_id: int, channel_slug: str):
        data = {'customer_id': customer_id, 'channel_slug': channel_slug}
        if not await self.repository.delete_channel(**data):
            raise StageExceptions().channel_not_found

    async def update_channel(
            self, customer_id: int, channel_slug: str,
            updated_data: UpdateStageSchema
    ):
        if updated_data.is_empty:
            raise StageExceptions().empty_data
        return await self.repository \
            .update_channel(customer_id=customer_id, channel_slug=channel_slug,
                            updated_data=updated_data)

    async def get_channel(self, channel_slug: str):
        data = {'channel_slug': channel_slug}
        if (result := await self.repository.get_channel(**data)) is None:
            raise StageExceptions().channel_not_found
        return result

    async def subscribe(self, customer_id: int, channel_slug: str):
        data = {'customer_id': customer_id, 'channel_slug': channel_slug}
        return await self.repository.subscribe(**data)

    async def unsubscribe(self, customer_id: int, channel_id: int):
        data = {'customer_id': customer_id, 'channel_id': channel_id}
        if not await self.repository.unsubscribe(**data):
            raise ChannelExceptions.unsubscribe(**data)

    async def check_if_user_in_subscribed(
            self, customer_id: int, channel_id: int):
        data = {'customer_id': customer_id, 'channel_id': channel_id}
        return await self.repository.check_if_user_in_subscribed(**data)
