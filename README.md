<div align="center">

# QuantLab AI

### Modern ASX Financial Analytics Platform

Fullstack quantitative analytics platform for ASX equities built with Python, FastAPI, React, ETL pipelines, risk analytics, and interactive dashboards.

---

![Python](https://img.shields.io/badge/Python-3.13-blue?style=for-the-badge&logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Build-purple?style=for-the-badge&logo=vite)
![SQLite](https://img.shields.io/badge/SQLite-Database-003B57?style=for-the-badge&logo=sqlite)
![Status](https://img.shields.io/badge/Status-In_Development-orange?style=for-the-badge)

</div>

---

# Overview

QuantLab AI is a modern fullstack financial analytics platform focused on the Australian Securities Exchange (ASX).

The project demonstrates:

- Financial data engineering
- Quantitative analytics
- ETL pipeline development
- Risk analysis
- Portfolio analytics
- Time-series processing
- REST API architecture
- Interactive frontend dashboards
- Fullstack software engineering

---

# Project Goals

This platform is designed to:

- Analyze ASX market data
- Visualize financial trends
- Calculate risk metrics
- Compare sectors and companies
- Backtest investment strategies
- Demonstrate professional financial engineering skills

---

# Tech Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | Frontend UI |
| Vite | Build system |
| Material UI | UI framework |
| Plotly.js | Financial charts |
| Axios | API communication |
| React Router | Routing |

---

## Backend

| Technology | Purpose |
|---|---|
| FastAPI | REST API |
| Python 3.13 | Core backend |
| Pandas | Data analysis |
| NumPy | Numerical computing |
| SQLAlchemy | ORM |
| yfinance | Market data |

---

## Database

| Database | Usage |
|---|---|
| SQLite | MVP database |
| PostgreSQL | Future scaling |

---

# Planned Features

## Market Explorer

- ASX stock filtering
- Sector analysis
- Market cap filtering
- Volatility analysis

---

## Financial Charts

- OHLC charts
- Moving averages
- RSI
- MACD
- Volume analysis

---

## Risk Analytics

- Volatility
- Sharpe Ratio
- Max Drawdown
- Correlation Matrix
- Rolling volatility

---

## Portfolio Analytics

- Portfolio performance
- Risk exposure
- Sector concentration
- Portfolio comparison

---

## Backtesting Engine

Strategies:

- Buy & Hold
- SMA Crossover
- RSI Strategy

Metrics:

- Total Return
- Annual Return
- Win Rate
- Sharpe Ratio
- Benchmark comparison

---

# System Architecture

```text
Yahoo Finance API
        ↓
ETL Pipeline
        ↓
SQLite Database
        ↓
Analytics Engine
        ↓
FastAPI REST API
        ↓
React Frontend Dashboard
```

---

# Project Structure

```text
quantlab-ai/
│
├── backend/
│   ├── app/
│   ├── analytics/
│   ├── etl/
│   ├── models/
│   ├── routers/
│   └── db/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── charts/
│   └── services/
│
├── data/
├── docs/
└── README.md
```

---

# Current Status

Project initialization and architecture setup in progress.

---

# Future Roadmap

- Real-time market streaming
- AI-generated summaries
- Portfolio optimization
- Machine learning analytics
- WebSocket live data
- Docker deployment
- CI/CD pipelines

---

# Why This Project Matters

QuantLab AI is not intended to be a hedge-fund production platform.

Instead, the goal is to demonstrate:

- strong quantitative thinking
- modern backend engineering
- financial analytics workflows
- scalable architecture
- professional fullstack development

---

# Author

## Amin Nazari

Melbourne, Australia

Fullstack Developer | Python Developer | Financial Analytics Enthusiast

---

# License

MIT License