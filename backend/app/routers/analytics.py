from fastapi import APIRouter
from app.analytics.volatility import calculate_volatility
from app.analytics.returns import calculate_returns
from app.analytics.risk import calculate_drawdown, calculate_sharpe_ratio

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

@router.get("/analytics/drawdown/{ticker}")
def get_drawdown_analytics(
    ticker: str,
    period: str = "1y",
):
    return calculate_drawdown(ticker=ticker, period=period)


@router.get("/analytics/sharpe/{ticker}")
def get_sharpe_ratio_analytics(
    ticker: str,
    period: str = "1y",
    risk_free_rate: float = 0.0,
):
    return calculate_sharpe_ratio(
        ticker=ticker,
        period=period,
        risk_free_rate=risk_free_rate,
    )


    