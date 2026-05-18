from fastapi import APIRouter

from app.services.market_service import get_asx_top_stocks

router = APIRouter()


@router.get("/stocks/asx-top")
def get_asx_top_market_data():
    return {
        "market": "ASX",
        "stocks": get_asx_top_stocks(),
    }