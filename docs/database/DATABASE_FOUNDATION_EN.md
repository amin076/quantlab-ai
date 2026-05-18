\# QuantLab AI — Database Foundation



\## 1. Overview



The QuantLab AI platform uses a database layer to store and manage financial market data, analytics results, and future portfolio information.



The initial database design focuses on:



\- simplicity

\- maintainability

\- local development

\- rapid prototyping



The current MVP database is:



```text

SQLite

```



The architecture is designed so that migration to PostgreSQL in the future will be straightforward.



\---



\## 2. Current Database Technology



| Technology | Purpose |

|---|---|

| SQLite | Local MVP database |

| SQLAlchemy | ORM and database abstraction |



\---



\## 3. Why SQLite?



SQLite was selected for the initial MVP because:



\- lightweight

\- no server setup required

\- easy local development

\- fast prototyping

\- ideal for portfolio projects

\- zero infrastructure cost



SQLite is sufficient for:



\- ETL development

\- analytics testing

\- API development

\- local dashboard testing



\---



\## 4. Why SQLAlchemy?



SQLAlchemy provides:



\- ORM abstraction

\- database portability

\- cleaner database logic

\- maintainable queries

\- easier migration to PostgreSQL



The project avoids raw SQL where possible to improve maintainability.



\---



\## 5. Database Architecture



Current database architecture:



```text

FastAPI

&#x20;   ↓

SQLAlchemy ORM

&#x20;   ↓

SQLite Database

```



Future scalable architecture:



```text

FastAPI

&#x20;   ↓

SQLAlchemy ORM

&#x20;   ↓

PostgreSQL

```



\---



\## 6. Database Configuration



Database configuration is centralized in:



```text

app/core/config.py

```



Current configuration:



```python

DATABASE\_URL = "sqlite:///./quantlab.db"

```



This design allows future environment-based configuration.



\---



\## 7. Database Engine



Database engine creation:



```text

app/db/session.py

```



Responsibilities:



\- create SQLAlchemy engine

\- configure SQLite connection

\- create session factory



Current SQLite configuration:



```python

connect\_args={"check\_same\_thread": False}

```



This is required for SQLite compatibility with FastAPI.



\---



\## 8. Declarative Base



The ORM declarative base is defined in:



```text

app/db/base.py

```



Purpose:



\- create reusable ORM model base

\- support future database models

\- centralize ORM inheritance



\---



\## 9. Planned Database Tables



Future database tables may include:



| Table | Purpose |

|---|---|

| stocks | Stock metadata |

| stock\_prices | Historical prices |

| risk\_metrics | Analytics metrics |

| portfolios | Portfolio definitions |

| portfolio\_holdings | Portfolio assets |

| backtests | Strategy results |

| sectors | Sector information |



\---



\## 10. Data Storage Goals



The database layer should support:



\- historical market data

\- analytics caching

\- portfolio storage

\- strategy results

\- future AI summaries



\---



\## 11. Future Database Improvements



Planned future improvements:



\- PostgreSQL migration

\- database indexing

\- query optimization

\- Alembic migrations

\- async database support

\- Redis caching

\- data partitioning

\- scheduled cleanup jobs



\---



\## 12. Scalability Considerations



The current architecture is intentionally designed to:



\- keep MVP development simple

\- support future scaling

\- minimize rewrite effort

\- maintain clean separation of concerns



This allows the project to evolve from:



```text

Local portfolio project

```



toward:



```text

Scalable analytics platform

```



without major architectural redesign.

