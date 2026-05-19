from sqlalchemy import String, Float, BigInteger
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Stock(Base):
    __tablename__ = "stocks"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        autoincrement=True,
    )

    ticker: Mapped[str] = mapped_column(
        String(20),
        unique=True,
        index=True,
    )

    name: Mapped[str] = mapped_column(
        String(255),
    )

    sector: Mapped[str] = mapped_column(
        String(255),
    )

    market_cap: Mapped[float] = mapped_column(
        BigInteger,
        nullable=True,
    )

    currency: Mapped[str] = mapped_column(
        String(10),
        nullable=True,
    )

    current_price: Mapped[float] = mapped_column(
        Float,
        nullable=True,
    )