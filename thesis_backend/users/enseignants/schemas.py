from pydantic import BaseModel, Field
from datetime import datetime

from users.profile.schemas import UserSchema


class CreateEnseignantSchema(BaseModel):
    username: str
    password: str
    nom: str
    prenoms: str
    matricule: str
    grade: str
    specialite: str
    departement_id: int 
    
    


class UpdateEnseignantSchema(BaseModel):
    matricule: str | None = Field(None, max_length=200)
    grade: str | None = Field(None, max_length=255)
    specialite: str | None = Field(None, max_length=255)

    @property
    def is_empty(self): return not self.dict(exclude_none=True)


class EnseignantSchema(BaseModel):
    id: int
    slug: str | None
    matricule: str
    grade: str
    specialite: str
    departement_id: int
    created: datetime


    class Config:
        orm_mode = True

class DepartementSchema(BaseModel):
    id: int
    nom: str 
    
    class Config:
        orm_mode = True