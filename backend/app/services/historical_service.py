import yfinance as yf
import pandas as pd


def get_historical_prices(ticker: str, period: str = "6mo"):
    stock = yf.Ticker(ticker)

    df = stock.history(period=period)

    if df.empty:
        return {
            "ticker": ticker,
            "error": "No historical data found.",
        }

    df.reset_index(inplace=True)

    df["Date"] = df["Date"].astype(str)

    records = df[
        ["Date", "Open", "High", "Low", "Close", "Volume"]
    ].to_dict(orient="records")

    return {
        "ticker": ticker,
        "period": period,
        "total_records": len(records),
        "prices": records,
    }