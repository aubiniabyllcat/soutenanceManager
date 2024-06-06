from pydantic import BaseModel, Field
from datetime import datetime



class CreateStageSchema(BaseModel):
    theme: str
    nom_entreprise: str
    lieu: str 
    responsate: str 
    contact: int
    equipe_id: int  
    cahier_charge: str 
    

class UpdateStageSchema(BaseModel):
    theme: str | None = Field(None, max_length=255)
    nom_entreprise: str | None = Field(None, max_length=255)
    lieu: str  | None = Field(None, max_length=255)

    @property
    def is_empty(self): return not self.dict(exclude_none=True)


class StageSchema(CreateStageSchema):
    id: int
    owner_id: int
    slug: str | None
    created: datetime

    # online_customers: list[CustomerSchema]
    # subscribers: list[CustomerSchema]

    class Config:
        orm_mode = True
