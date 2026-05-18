from fastapi import APIRouter

from app.analytics.returns import calculate_returns

router = APIRouter()


@router.get("/analytics/returns/{ticker}")
def get_returns_analytics(
    ticker: str,
    period: str = "6mo",
):
    return calculate_returns(ticker=ticker, period=period)