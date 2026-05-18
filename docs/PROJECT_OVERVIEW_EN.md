\# QuantLab AI — Project Overview



\## 1. Project Purpose



QuantLab AI is a fullstack ASX financial analytics platform.



The goal is to build a professional financial data application that demonstrates:



\- Python backend development

\- FastAPI API design

\- React frontend development

\- ETL data pipelines

\- Financial time-series analytics

\- Risk metrics

\- Backtesting

\- Portfolio analytics

\- Clean software architecture



This project is designed as both:



\- a strong portfolio project

\- a useful financial market research prototype



\---



\## 2. Main Goals



The main goals are:



1\. Build a clean fullstack architecture.

2\. Collect ASX market data.

3\. Store financial data in a local database.

4\. Analyze price movements and risk.

5\. Visualize market trends.

6\. Build reusable backend services.

7\. Build a professional analytics dashboard.

8\. Document every step clearly.



\---



\## 3. Tech Stack



\### Frontend



\- React

\- Vite

\- Material UI

\- React Router

\- Axios

\- Plotly.js



\### Backend



\- Python 3.13

\- FastAPI

\- Pandas

\- NumPy

\- SQLAlchemy

\- yfinance

\- Pydantic

\- Uvicorn



\### Database



\- SQLite for MVP

\- PostgreSQL later if needed



\---



\## 4. Initial Project Structure



```text

quantlab-ai/

│

├── backend/

│   ├── app/

│   ├── routers/

│   ├── services/

│   ├── etl/

│   ├── analytics/

│   ├── db/

│   ├── models/

│   ├── schemas/

│   └── utils/

│

├── frontend/

│   ├── src/

│   ├── pages/

│   ├── components/

│   ├── charts/

│   ├── services/

│   ├── layouts/

│   ├── hooks/

│   └── theme/

│

├── docs/

├── data/

├── README.md

└── .gitignore

```



\---



\## 5. MVP Features



\### ASX Market Explorer



The app should display ASX companies and allow filtering by:



\- ticker

\- sector

\- market cap

\- price range

\- volatility



\### Financial Charts



The app should display:



\- price charts

\- volume charts

\- moving averages

\- RSI

\- MACD



\### ETL Pipeline



The ETL pipeline should:



1\. Extract market data from Yahoo Finance.

2\. Transform raw prices into analytics-ready data.

3\. Load the results into SQLite.



\### Risk Analytics



The system should calculate:



\- volatility

\- Sharpe ratio

\- maximum drawdown

\- rolling volatility

\- correlation metrics



\### Backtesting



The system should support simple strategies:



\- Buy and Hold

\- SMA Crossover

\- RSI Strategy



\### Portfolio Analytics



Users should be able to:



\- select multiple ASX stocks

\- assign weights

\- analyze portfolio performance

\- inspect sector concentration



\---



\## 6. Development Phases



\### Phase 1 — Project Setup



\- Create GitHub repository

\- Create backend folder

\- Create frontend folder

\- Create docs folder

\- Create data folder

\- Add README

\- Add .gitignore



\### Phase 2 — Backend Foundation



\- Create FastAPI app

\- Create API routers

\- Create database connection

\- Create basic health check endpoint

\- Create stock data models



\### Phase 3 — ETL Pipeline



\- Download ASX price data

\- Clean data

\- Calculate returns

\- Save to database



\### Phase 4 — Analytics Engine



\- Calculate volatility

\- Calculate Sharpe ratio

\- Calculate drawdown

\- Calculate moving averages



\### Phase 5 — Frontend Dashboard



\- Create dashboard layout

\- Connect React to FastAPI

\- Display stock list

\- Display charts

\- Add filters



\### Phase 6 — Portfolio and Backtesting



\- Add portfolio selection

\- Add strategy backtesting

\- Show performance metrics



\### Phase 7 — AI Summary



\- Generate simple market summaries

\- Explain risk and performance

\- Summarize portfolio exposure



\---



\## 7. Important Notes



This project is not a production trading platform.



It does not provide financial advice.



It is designed for:



\- learning

\- portfolio demonstration

\- financial analytics practice

\- software engineering demonstration



\---



\## 8. Documentation Plan



This document will be improved step by step.



Future sections may include:



\- API documentation

\- database schema

\- ETL documentation

\- frontend architecture

\- deployment guide

\- testing guide

\- roadmap

