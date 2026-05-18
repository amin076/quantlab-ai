\# QuantLab AI — Backend Architecture



\## 1. Overview



The QuantLab AI backend is designed using a modular FastAPI architecture.



The backend is responsible for:



\- market data retrieval

\- ETL pipelines

\- analytics calculations

\- risk metrics

\- backtesting logic

\- REST API endpoints

\- database interactions



The architecture is designed to be:



\- scalable

\- modular

\- maintainable

\- production-oriented

\- easy to extend



\---



\## 2. Backend Technologies



| Technology | Purpose |

|---|---|

| Python 3.13 | Core language |

| FastAPI | REST API framework |

| SQLAlchemy | ORM and database layer |

| SQLite | Initial database |

| Pandas | Data analysis |

| NumPy | Numerical calculations |

| yfinance | Market data source |

| Pydantic | Data validation |

| Uvicorn | ASGI server |



\---



\## 3. Backend Folder Structure



```text

backend/

│

├── app/

│   ├── main.py

│   │

│   ├── core/

│   │   ├── config.py

│   │   └── constants.py

│   │

│   ├── routers/

│   │   └── health.py

│   │

│   ├── services/

│   │

│   ├── analytics/

│   │

│   ├── etl/

│   │

│   ├── db/

│   │   ├── base.py

│   │   └── session.py

│   │

│   ├── models/

│   │

│   ├── schemas/

│   │

│   └── utils/

│

├── requirements.txt

└── .venv/

```



\---



\## 4. Main Application



Main FastAPI application:



```text

app/main.py

```



Responsibilities:



\- initialize FastAPI app

\- configure middleware

\- register routers

\- expose API endpoints

\- configure CORS



\---



\## 5. Core Layer



\### config.py



Contains centralized application configuration.



Examples:



\- app name

\- version

\- database URL

\- allowed origins



This design allows future environment-based configuration.



\---



\### constants.py



Contains reusable project constants.



Examples:



\- ASX ticker lists

\- sector mappings

\- default settings



\---



\## 6. Routers Layer



The routers layer defines API endpoints.



Current router:



```text

health.py

```



Current endpoint:



```text

/api/health

```



Purpose:



\- health checks

\- backend availability verification

\- API testing



Future routers may include:



```text

stocks.py

portfolio.py

analytics.py

backtesting.py

market.py

```



\---



\## 7. Services Layer



The services layer contains business logic.



Examples:



\- market data retrieval

\- financial calculations

\- portfolio analysis

\- analytics processing



This separates business logic from API routing.



\---



\## 8. ETL Layer



The ETL layer handles:



\### Extract

Retrieve market data from external sources.



\### Transform

Clean and process financial data.



\### Load

Store processed data into the database.



Future ETL pipelines may support:



\- batch processing

\- scheduled updates

\- multi-source ingestion



\---



\## 9. Analytics Layer



Responsible for:



\- volatility calculations

\- Sharpe ratio

\- drawdown analysis

\- moving averages

\- rolling statistics

\- correlation metrics



This layer will become the core quantitative engine of the platform.



\---



\## 10. Database Layer



The database layer uses SQLAlchemy.



\### base.py



Defines the declarative ORM base.



\### session.py



Creates:



\- database engine

\- session factory

\- SQLite connection



Current database:



```text

SQLite

```



Future scalable option:



```text

PostgreSQL

```



\---



\## 11. Schemas Layer



The schemas layer will contain Pydantic schemas for:



\- request validation

\- response serialization

\- API contracts



\---



\## 12. Utils Layer



Contains reusable utility functions.



Examples:



\- date helpers

\- formatting helpers

\- calculation helpers

\- logging helpers



\---



\## 13. Architectural Goals



The backend architecture aims to provide:



\- clean separation of concerns

\- scalable API design

\- reusable services

\- maintainable codebase

\- professional software engineering structure



\---



\## 14. Future Improvements



Planned backend improvements:



\- authentication

\- caching

\- WebSocket streaming

\- async processing

\- Redis integration

\- PostgreSQL migration

\- Docker support

\- CI/CD integration

\- background workers

\- scheduled ETL jobs

