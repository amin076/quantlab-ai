import yfinance as yf

from app.core.constants import ASX_TOP_TICKERS


def get_asx_top_stocks():
    stocks_data = []

    for ticker in ASX_TOP_TICKERS:
        try:
            stock = yf.Ticker(ticker)
            info = stock.info

            stocks_data.append(
                {
                    "ticker": ticker,
                    "name": info.get("shortName"),
                    "sector": info.get("sector"),
                    "market_cap": info.get("marketCap"),
                    "currency": info.get("currency"),
                    "current_price": info.get("currentPrice"),
                }
            )

        except Exception as error:
            stocks_data.append(
                {
                    "ticker": ticker,
                    "error": str(error),
                }
            )

    return stocks_data