import yfinance as yf


def calculate_returns(ticker: str, period: str = "6mo"):
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
    df["cumulative_return"] = (1 + df["daily_return"]).cumprod() - 1

    df = df.dropna()

    records = df[
        ["Date", "Close", "daily_return", "cumulative_return"]
    ].to_dict(orient="records")

    return {
        "ticker": ticker,
        "period": period,
        "total_records": len(records),
        "analytics": records,
    }