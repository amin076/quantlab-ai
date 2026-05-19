from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import stocks
from app.routers import health
from app.routers import prices
from app.routers import analytics

app = FastAPI(
    title="QuantLab AI API",
    description="Backend API for ASX financial analytics, ETL pipelines, risk metrics, and backtesting.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "http://localhost:5174",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:5174",
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api", tags=["Health"])
app.include_router(stocks.router, prefix="/api", tags=["Stocks"])
app.include_router(prices.router, prefix="/api", tags=["Prices"])
app.include_router(analytics.router, prefix="/api", tags=["Analytics"])

@app.get("/")
def root():
    return {
        "app": "QuantLab AI API",
        "status": "running",
        "version": "0.1.0",
    }