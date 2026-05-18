from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    APP_NAME: str = "QuantLab AI API"
    VERSION: str = "0.1.0"

    DATABASE_URL: str = "sqlite:///./quantlab.db"

    ALLOWED_ORIGINS: list[str] = [
        "http://localhost:5173",
    ]


settings = Settings()
