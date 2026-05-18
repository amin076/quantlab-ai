\# QuantLab AI — Returns Analytics



\## 1. Overview



This module provides quantitative return analytics for ASX stocks using historical market data.



The analytics system calculates:



\- daily returns

\- cumulative returns



using Pandas DataFrame processing.



This module establishes the foundation for future quantitative financial analytics.



\---



\## 2. API Endpoint



```text

GET /api/analytics/returns/{ticker}

```



Examples:



```text

/api/analytics/returns/CBA.AX

/api/analytics/returns/BHP.AX?period=1y

```



\---



\## 3. Supported Parameters



| Parameter | Description | Default |

|---|---|---|

| ticker | ASX ticker symbol | Required |

| period | Historical data period | 6mo |



\---



\## 4. Data Source



Historical market data is retrieved from:



```text

Yahoo Finance

```



using:



```python

yfinance

```



\---



\## 5. Analytics Module



Returns analytics logic:



```text

backend/app/analytics/returns.py

```



Responsibilities:



\- retrieve historical close prices

\- calculate daily returns

\- calculate cumulative returns

\- process Pandas DataFrames

\- return frontend-ready JSON responses



\---



\## 6. Analytics Processing Flow



```text

Yahoo Finance

&#x20;       ↓

Historical Prices

&#x20;       ↓

Pandas DataFrame

&#x20;       ↓

Daily Returns

&#x20;       ↓

Cumulative Returns

&#x20;       ↓

JSON Response

```



\---



\## 7. Daily Returns Formula



Daily returns are calculated using:



:contentReference\[oaicite:0]{index=0}



Where:



| Symbol | Meaning |

|---|---|

| \\(R\_t\\) | Daily return |

| \\(P\_t\\) | Current close price |

| \\(P\_{t-1}\\) | Previous close price |



Implemented using:



```python

df\["daily\_return"] = df\["Close"].pct\_change()

```



\---



\## 8. Cumulative Returns Formula



Cumulative returns are calculated using compounded returns:



:contentReference\[oaicite:1]{index=1}



Implemented using:



```python

df\["cumulative\_return"] = (1 + df\["daily\_return"]).cumprod() - 1

```



\---



\## 9. Example Response



```json

{

&#x20; "ticker": "CBA.AX",

&#x20; "period": "6mo",

&#x20; "total\_records": 120,

&#x20; "analytics": \[

&#x20;   {

&#x20;     "Date": "2026-01-10",

&#x20;     "Close": 153.7,

&#x20;     "daily\_return": 0.0042,

&#x20;     "cumulative\_return": 0.1285

&#x20;   }

&#x20; ]

}

```



\---



\## 10. Architectural Importance



This module is important because it introduces:



\- quantitative analytics

\- statistical financial calculations

\- reusable analytics pipelines

\- Pandas-based computation workflows

\- frontend analytics data sources



\---



\## 11. Future Improvements



Planned future analytics:



\- volatility

\- rolling volatility

\- Sharpe ratio

\- Sortino ratio

\- drawdown analysis

\- moving averages

\- technical indicators

\- portfolio analytics

\- risk-adjusted metrics

