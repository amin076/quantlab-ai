from fastapi import APIRouter
from app.analytics.volatility import calculate_volatility
from app.analytics.returns import calculate_returns

router = APIRouter()


@router.get("/analytics/returns/{ticker}")
def get_returns_analytics(
    ticker: str,
    period: str = "6mo",
):
    return calculate_returns(ticker=ticker, period=period)

@router.get("/analytics/volatility/{ticker}")
def get_volatility_analytics(
    ticker: str,
    period: str = "1y",
):
    return calculate_volatility(
        ticker=ticker,
        period=period,
    )
    