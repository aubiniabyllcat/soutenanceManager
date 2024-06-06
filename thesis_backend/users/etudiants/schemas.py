from pydantic import BaseModel, Field
from datetime import datetime

from users.profile.schemas import UserSchema


class CreateEtudiantSchema(BaseModel):
    matricule: str = Field(max_length=200)
    filiere_id: int 
    annee_id: int
    utilisateur_id: int


class UpdateEtudiantSchema(BaseModel):
    matricule: str | None = Field(None, max_length=200)
    filiere: str | None = Field(None, max_length=255)

    @property
    def is_empty(self): return not self.dict(exclude_none=True)


class EtudiantSchema(CreateEtudiantSchema):
    id: int
    slug: str | None
    created: datetime


    class Config:
        orm_mode = True



