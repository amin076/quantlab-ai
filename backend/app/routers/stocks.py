from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.db.session import SessionLocal
from app.services.market_service import get_asx_top_stocks
from app.services.stock_persistence_service import (
    get_stocks_from_db,
    sync_asx_top_stocks,
)

router = APIRouter()


def get_db():
    db = SessionLocal()

    try:
        yield db
    finally:
        db.close()


@router.get("/stocks/asx-top")
def get_asx_top_market_data():
    return {
        "market": "ASX",
        "source": "Yahoo Finance",
        "stocks": get_asx_top_stocks(),
    }


@router.post("/stocks/sync-asx-top")
def sync_asx_top_market_data(db: Session = Depends(get_db)):
    synced_stocks = sync_asx_top_stocks(db)

    return {
        "message": "ASX top stocks synced successfully.",
        "total_synced": len(synced_stocks),
        "stocks": [
            {
                "ticker": stock.ticker,
                "name": stock.name,
                "sector": stock.sector,
                "market_cap": stock.market_cap,
                "currency": stock.currency,
                "current_price": stock.current_price,
            }
            for stock in synced_stocks
        ],
    }


@router.get("/stocks/db")
def get_database_stocks(db: Session = Depends(get_db)):
    stocks = get_stocks_from_db(db)

    return {
        "market": "ASX",
        "source": "SQLite database",
        "total": len(stocks),
        "stocks": [
            {
                "ticker": stock.ticker,
                "name": stock.name,
                "sector": stock.sector,
                "market_cap": stock.market_cap,
                "currency": stock.currency,
                "current_price": stock.current_price,
            }
            for stock in stocks
        ],
    }