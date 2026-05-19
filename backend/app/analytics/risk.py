import numpy as np
import yfinance as yf


TRADING_DAYS_PER_YEAR = 252


def calculate_drawdown(ticker: str, period: str = "1y"):
    stock = yf.Ticker(ticker)
    df = stock.history(period=period)

    if df.empty:
        return {"ticker": ticker, "error": "No historical data found."}

    df = df.reset_index()
    df["Date"] = df["Date"].astype(str)

    df["daily_return"] = df["Close"].pct_change()
    df["cumulative_return"] = (1 + df["daily_return"]).cumprod()
    df["running_peak"] = df["cumulative_return"].cummax()
    df["drawdown"] = (df["cumulative_return"] - df["running_peak"]) / df["running_peak"]

    df = df.dropna()

    return {
        "ticker": ticker,
        "period": period,
        "max_drawdown": float(df["drawdown"].min()),
        "drawdown_data": df[
            ["Date", "Close", "cumulative_return", "running_peak", "drawdown"]
        ].to_dict(orient="records"),
    }


def calculate_sharpe_ratio(
    ticker: str,
    period: str = "1y",
    risk_free_rate: float = 0.0,
):
    stock = yf.Ticker(ticker)
    df = stock.history(period=period)

    if df.empty:
        return {"ticker": ticker, "error": "No historical data found."}

    df["daily_return"] = df["Close"].pct_change()
    df = df.dropna()

    mean_daily_return = df["daily_return"].mean()
    daily_volatility = df["daily_return"].std()

    if daily_volatility == 0:
        sharpe_ratio = None
    else:
        daily_risk_free_rate = risk_free_rate / TRADING_DAYS_PER_YEAR
        sharpe_ratio = (
            (mean_daily_return - daily_risk_free_rate)
            / daily_volatility
            * np.sqrt(TRADING_DAYS_PER_YEAR)
        )

    return {
        "ticker": ticker,
        "period": period,
        "risk_free_rate": risk_free_rate,
        "mean_daily_return": float(mean_daily_return),
        "daily_volatility": float(daily_volatility),
        "annualized_sharpe_ratio": None if sharpe_ratio is None else float(sharpe_ratio),
    }