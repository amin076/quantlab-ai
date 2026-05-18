\# QuantLab AI — API Documentation



\## 1. Overview



The QuantLab AI backend exposes REST API endpoints using FastAPI.



The API is designed to provide:



\- ASX market data

\- financial analytics

\- risk metrics

\- portfolio analysis

\- backtesting results



The API follows a modular architecture and returns JSON responses.



\---



\## 2. Base URL



Local development server:



```text

http://127.0.0.1:8000

```



Swagger documentation:



```text

http://127.0.0.1:8000/docs

```



\---



\## 3. Current API Endpoints



| Endpoint | Method | Description |

|---|---|---|

| / | GET | Root API status |

| /api/health | GET | Health check endpoint |

| /api/stocks/asx-top | GET | Retrieve top ASX stock data |



\---



\# 4. Root Endpoint



\## Endpoint



```text

GET /

```



\## Description



Returns backend API status information.



\## Example Response



```json

{

&#x20; "app": "QuantLab AI API",

&#x20; "status": "running",

&#x20; "version": "0.1.0"

}

```



\---



\# 5. Health Endpoint



\## Endpoint



```text

GET /api/health

```



\## Description



Checks backend availability.



Useful for:



\- API monitoring

\- health checks

\- deployment testing



\## Example Response



```json

{

&#x20; "status": "ok",

&#x20; "service": "quantlab-ai-backend"

}

```



\---



\# 6. ASX Top Stocks Endpoint



\## Endpoint



```text

GET /api/stocks/asx-top

```



\## Description



Retrieves real-time data for selected major ASX companies using Yahoo Finance.



Current tracked tickers:



```text

CBA.AX

BHP.AX

CSL.AX

WBC.AX

NAB.AX

ANZ.AX

MQG.AX

```



\---



\## Data Source



```text

Yahoo Finance

```



using:



```python

yfinance

```



\---



\## Response Structure



```json

{

&#x20; "market": "ASX",

&#x20; "stocks": \[

&#x20;   {

&#x20;     "ticker": "CBA.AX",

&#x20;     "name": "Company Name",

&#x20;     "sector": "Financial Services",

&#x20;     "market\_cap": 267882594304,

&#x20;     "currency": "AUD",

&#x20;     "current\_price": 160.205

&#x20;   }

&#x20; ]

}

```



\---



\## Response Fields



| Field | Description |

|---|---|

| ticker | ASX ticker symbol |

| name | Company short name |

| sector | Company sector |

| market\_cap | Market capitalization |

| currency | Trading currency |

| current\_price | Current stock price |



\---



\# 7. Service Layer



Market data retrieval logic is implemented in:



```text

backend/app/services/market\_service.py

```



Responsibilities:



\- retrieve Yahoo Finance data

\- handle ticker iteration

\- structure API responses

\- handle exceptions



\---



\# 8. Router Layer



Stock endpoints are implemented in:



```text

backend/app/routers/stocks.py

```



Responsibilities:



\- expose stock API routes

\- connect API endpoints to services

\- return JSON responses



\---



\# 9. Error Handling



Current implementation includes basic exception handling for:



\- unavailable ticker data

\- Yahoo Finance errors

\- invalid responses



Future improvements may include:



\- custom exception classes

\- retry mechanisms

\- API rate limit handling

\- logging integration



\---



\# 10. Planned Future Endpoints



Future API endpoints may include:



| Endpoint | Purpose |

|---|---|

| /api/stocks/{ticker} | Individual stock details |

| /api/prices/{ticker} | Historical prices |

| /api/analytics/{ticker} | Risk metrics |

| /api/backtest/{ticker} | Strategy backtesting |

| /api/portfolio/analyze | Portfolio analytics |

| /api/sectors | Sector analytics |



\---



\# 11. API Design Goals



The API is designed to be:



\- modular

\- scalable

\- frontend-friendly

\- analytics-oriented

\- easy to extend

\- suitable for future production scaling

