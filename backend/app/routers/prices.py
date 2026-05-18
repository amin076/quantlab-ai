from fastapi import APIRouter

from app.services.historical_service import get_historical_prices

router = APIRouter()


@router.get("/prices/{ticker}")
def historical_prices(
    ticker: str,
    period: str = "6mo",
):
    return get_historical_prices(
        ticker=ticker,
        period=period,
    )