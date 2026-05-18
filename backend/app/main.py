from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import stocks
from app.routers import health

app = FastAPI(
    title="QuantLab AI API",
    description="Backend API for ASX financial analytics, ETL pipelines, risk metrics, and backtesting.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router, prefix="/api", tags=["Health"])
app.include_router(stocks.router, prefix="/api", tags=["Stocks"])


@app.get("/")
def root():
    return {
        "app": "QuantLab AI API",
        "status": "running",
        "version": "0.1.0",
    }