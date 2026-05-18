import yfinance as yf
import numpy as np


TRADING_DAYS_PER_YEAR = 252


def calculate_volatility(
    ticker: str,
    period: str = "1y",
):
    stock = yf.Ticker(ticker)

    df = stock.history(period=period)

    if df.empty:
        return {
            "ticker": ticker,
            "error": "No historical data found.",
        }

    df = df.reset_index()

    df["Date"] = df["Date"].astype(str)

    df["daily_return"] = df["Close"].pct_change()

    df = df.dropna()

    daily_volatility = df["daily_return"].std()

    annualized_volatility = (
        daily_volatility * np.sqrt(TRADING_DAYS_PER_YEAR)
    )

    rolling_volatility = (
        df["daily_return"]
        .rolling(window=20)
        .std()
        * np.sqrt(TRADING_DAYS_PER_YEAR)
    )

    df["rolling_volatility"] = rolling_volatility

    df = df.dropna()

    records = df[
        [
            "Date",
            "Close",
            "daily_return",
            "rolling_volatility",
        ]
    ].to_dict(orient="records")

    return {
        "ticker": ticker,
        "period": period,
        "daily_volatility": float(daily_volatility),
        "annualized_volatility": float(
            annualized_volatility
        ),
        "total_records": len(records),
        "volatility_data": records,
    }