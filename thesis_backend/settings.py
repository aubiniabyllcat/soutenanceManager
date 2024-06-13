from functools import lru_cache

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    host: str = "localhost"
    port: int = 5432

    base_url: str = "http://localhost:8000"

    secret_key: str = "c670b50eb5a1f2822d6ff24ab880a894f20a3606af024886cd04b97ed1fc08e7fb71d42cba0e1aa7ffa2ecb61066ac64907e"

    db_url: str = "postgresql+asyncpg://postgres:postgres1234@localhost:5432/thesis"

    postgres_user: str = "postgres"
    postgres_password: str = "1234"
    postgres_db_name: str = "thesis"
    postgres_server: str = "localhost"
    postgres_port: int = 5432

    profile_image_folder: str = "/path/to/profile/images"

    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    elastic_host: str = "localhost:9200"


    DB_URL: str
    SMTP_SERVER: str
    SMTP_PORT: int
    SMTP_USERNAME: str
    SMTP_PASSWORD: str
    FROM_EMAIL: str
    APP_NAME: str

    class Config:
        env_file = '.env'
        env_file_encoding = 'utf-8'


@lru_cache
def get_settings() -> Settings:
    return Settings()