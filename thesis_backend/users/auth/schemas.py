from pydantic import BaseModel, Field


class BaseUserAccountSchema(BaseModel):
    username: str = Field(max_length=200)


class CreateUserSchema(BaseUserAccountSchema):
    password: str
    nom: str
    prenoms: str
    role_id: int

class CreateLoginSchema(BaseModel):
    username: str = Field(max_length=200)
    password: str

class TokenSchema(BaseModel):
    access_token: str
    token_type: str
    user_info: dict

# Exemple de schéma pour les informations utilisateur
class UserInfoSchema(BaseModel):
    utilisateur_id: int
    nom: str
    prenoms: str
    role_id: int
    is_admin: str