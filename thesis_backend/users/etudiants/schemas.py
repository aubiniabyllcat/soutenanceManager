from pydantic import BaseModel, Field
from datetime import datetime

from users.profile.schemas import UserSchema


class CreateEtudiantSchema(BaseModel):
    username: str
    password: str
    nom: str
    prenoms: str
    matricule: str
    filiere_id: int
    annee_id: int

class UpdateEtudiantSchema(BaseModel):
    matricule: str | None = Field(None, max_length=200)
    filiere_id: int | None
    annee_id: int | None

    @property
    def is_empty(self): return not self.dict(exclude_none=True)


class EtudiantSchema(BaseModel):
    id: int
    slug: str | None
    created: datetime
    matricule: str
    filiere_id: int
    annee_id: int

    class Config:
        orm_mode = True



