from pydantic import BaseModel, Field
from datetime import datetime



class CreateEquipeSchema(BaseModel):
    id: str = Field(max_length=200)
    nom: str | None = Field(None, max_length=255)
    filiere_id: str = Field(max_length=200)
    describe_info: str | None = Field(None, max_length=255)
    
    


class UpdateEquipeSchema(BaseModel):
    channel_name: str | None = Field(None, max_length=200)
    describe_info: str | None = Field(None, max_length=255)

    @property
    def is_empty(self): return not self.dict(exclude_none=True)


# class ChannelSchema(CreateChannelSchema):
    id: int
    owner_id: int
    slug: str | None
    created: datetime

    # online_customers: list[CustomerSchema]
    # subscribers: list[CustomerSchema]

    class Config:
        orm_mode = True
