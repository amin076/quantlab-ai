from sqlalchemy.orm import Session

from app.models.stock import Stock
from app.services.market_service import get_asx_top_stocks


def sync_asx_top_stocks(db: Session):
    stocks_data = get_asx_top_stocks()

    synced_stocks = []

    for item in stocks_data:
        if item.get("error"):
            continue

        ticker = item.get("ticker")

        existing_stock = (
            db.query(Stock)
            .filter(Stock.ticker == ticker)
            .first()
        )

        if existing_stock:
            existing_stock.name = item.get("name")
            existing_stock.sector = item.get("sector")
            existing_stock.market_cap = item.get("market_cap")
            existing_stock.currency = item.get("currency")
            existing_stock.current_price = item.get("current_price")

            synced_stocks.append(existing_stock)
        else:
            new_stock = Stock(
                ticker=ticker,
                name=item.get("name"),
                sector=item.get("sector"),
                market_cap=item.get("market_cap"),
                currency=item.get("currency"),
                current_price=item.get("current_price"),
            )

            db.add(new_stock)
            synced_stocks.append(new_stock)

    db.commit()

    return synced_stocks


def get_stocks_from_db(db: Session):
    return db.query(Stock).order_by(Stock.market_cap.desc()).all()