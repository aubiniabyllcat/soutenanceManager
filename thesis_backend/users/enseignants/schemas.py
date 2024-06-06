from pydantic import BaseModel, Field
from datetime import datetime

from users.profile.schemas import UserSchema


class CreateEnseignantSchema(BaseModel):
    matricule: str = Field(max_length=200)
    grade: str
    specialite: str
    departement_id: int 
    utilisateur_id: int
    


class UpdateEnseignantSchema(BaseModel):
    matricule: str | None = Field(None, max_length=200)
    grade: str | None = Field(None, max_length=255)
    specialite: str | None = Field(None, max_length=255)

    @property
    def is_empty(self): return not self.dict(exclude_none=True)


class EnseignantSchema(CreateEnseignantSchema):
    id: int
    slug: str | None
    created: datetime


    class Config:
        orm_mode = True