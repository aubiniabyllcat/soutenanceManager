from pydantic import BaseModel, Field
from datetime import datetime

from users.profile.schemas import UserSchema


class CreateJurySchema(BaseModel):
    numero: int
    presiend_id: int
    examinateur_id: int
    rapporteur_id: int | None

class UpdateJurySchema(BaseModel):
    numero: int
    presiend_id: int
    examinateur_id: int
    rapporteur_id: int | None

    @property
    def is_empty(self): return not self.dict(exclude_none=True)


class JurySchema(BaseModel):
    id: int
    numero: int
    presiend_id: int
    examinateur_id: int
    rapporteur_id: int | None

    class Config:
        orm_mode = True

