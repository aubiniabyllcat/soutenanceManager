from fastapi import status, Depends
from permissions import UserPermission, etudiantPermission
from etudiants.auth.token_service import TokenService
from .schemas import  CreateStageSchema, StageSchema, UpdateStageSchema
from .repositories import StageRepositories

from .presenter import StagePresenter
from database import get_db_session


async def get_etudiant(
        etudiant=Depends(UserPermission(token_service=TokenService())
                         .get_current_etudiant)
):
    yield etudiant


# async def get_repository_service(session=Depends(get_db_session)):
#     yield {
#         'repository': ChannelRepositories(session=session)
#     }


async def get_presenter(session=Depends(get_db_session)):
    presenter = StagePresenter(
        repository=StageRepositories(session=session))
    yield presenter


async def get_stage_etudiant(stage_id: int, etudiant_id: int) -> dict:
    return {'stage_id': stage_id, 'etudiant_id': etudiant_id}


async def get_limit_offset_user(user_id: int, limit: int, offset: int) -> dict:
    return {'etudiant_id': user_id, 'limit': limit, 'offset': offset}


async def get_slug_etudiant(stage_slug: str, etudiant_id: int) -> dict:
    return {'stage_slug': stage_slug, 'etudiant_id': etudiant_id}


async def get_updated_data_slug_etudiant(updated_data: UpdateStageSchema,
                                         stage_slug: str,
                                         etudiant_id: int) -> dict:
    return {
        'updated_data': updated_data,
        'stage_slug': stage_slug,
        'etudiant_id': etudiant_id
    }


async def get_create_data_etudiant(etudiant_id: int,
                                   stage_data: CreateStageSchema) -> dict:
    return {'etudiant_id': etudiant_id, 'stage_data': stage_data}


response_data = {
    
    'stages': {
        'path': '/',
        'status_code': status.HTTP_200_OK,
        # 'response_model': list[stageSchema]
    },
    'create_stages': {
        'path': '/',
        'status_code': status.HTTP_201_CREATED,
    },
    'delete_stages': {
        'path': '/{stage_slug}',
        'status_code': status.HTTP_204_NO_CONTENT,
    },
    'update_stage': {
        'path': '/{stage_slug}',
        'status_code': status.HTTP_200_OK,
    },
    'stage': {
        'path': '/{stage_slug}',
        'status_code': status.HTTP_200_OK,
        'response_model': StageSchema
    }
    
}
