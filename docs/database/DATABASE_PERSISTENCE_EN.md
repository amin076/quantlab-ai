\# QuantLab AI — Database Persistence Foundation



\## 1. Overview



This module establishes the first real database persistence layer for QuantLab AI.



The system now supports:



\- SQLAlchemy ORM models

\- SQLite database initialization

\- structured database persistence

\- PostgreSQL-ready architecture



This is the foundation for future ETL pipelines, market storage, portfolio analytics, and production deployment.



\---



\# 2. Database Architecture



Current architecture:



```text

Yahoo Finance

&#x20;       ↓

FastAPI Services

&#x20;       ↓

SQLAlchemy ORM

&#x20;       ↓

SQLite Database

```



Future production architecture:



```text

Yahoo Finance

&#x20;       ↓

ETL Pipelines

&#x20;       ↓

PostgreSQL

&#x20;       ↓

FastAPI APIs

&#x20;       ↓

Frontend Dashboard

```



\---



\# 3. Current Database Engine



Current development database:



```text

SQLite

```



Reason:



\- lightweight local development

\- fast setup

\- simple debugging

\- ideal for MVP development



\---



\# 4. Future Database Migration



The project architecture is designed to support future migration to:



```text

PostgreSQL

```



without major structural changes.



The application uses:



\- SQLAlchemy ORM

\- reusable models

\- configurable DATABASE\_URL

\- database abstraction layers



to ensure migration flexibility.



\---



\# 5. Database Initialization



Database initialization logic:



```text

backend/app/db/init\_db.py

```



Responsibilities:



\- initialize database tables

\- create ORM metadata

\- connect database engine

\- prepare persistence layer



\---



\# 6. ORM Model



Current ORM model:



```text

backend/app/models/stock.py

```



Database table:



```text

stocks

```



\---



\# 7. Stock Table Structure



| Field | Type | Description |

|---|---|---|

| id | Integer | Primary key |

| ticker | String | ASX ticker |

| name | String | Company name |

| sector | String | Industry sector |

| market\_cap | BigInteger | Market capitalization |

| currency | String | Trading currency |

| current\_price | Float | Latest stock price |



\---



\# 8. SQLAlchemy Features Used



Current implementation uses:



\- Declarative ORM

\- mapped\_column

\- type-safe ORM fields

\- indexed columns

\- unique constraints



\---



\# 9. Importance of Persistence



Persistence is important because it enables:



\- local market caching

\- ETL workflows

\- historical storage

\- faster API responses

\- analytics processing

\- portfolio calculations

\- future scheduled jobs



\---



\# 10. Planned Future Features



Planned future database features:



\- historical market tables

\- ETL synchronization jobs

\- portfolio tables

\- user accounts

\- watchlists

\- analytics caching

\- scheduled updates

\- PostgreSQL migration

\- Alembic migrations



\---



\# 11. Development Workflow



Typical workflow:



```text

External APIs

&#x20;       ↓

Services

&#x20;       ↓

Database Models

&#x20;       ↓

Persistence Layer

&#x20;       ↓

API Responses

```



\---



\# 12. Architectural Importance



This module transforms QuantLab AI from:



```text

Stateless API Application

```



into:



```text

Persistent Financial Analytics Platform

```

