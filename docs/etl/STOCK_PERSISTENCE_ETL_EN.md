\# QuantLab AI — Stock Persistence ETL



\## 1. Overview



This module documents the first real ETL persistence workflow in QuantLab AI.



The system can now retrieve live ASX stock data from Yahoo Finance, save or update it in SQLite using SQLAlchemy ORM, and read stored records back through FastAPI endpoints.



\---



\## 2. ETL Flow



```text

Yahoo Finance

&#x20;       ↓

Market Service

&#x20;       ↓

Stock Persistence Service

&#x20;       ↓

SQLAlchemy ORM

&#x20;       ↓

SQLite Database

&#x20;       ↓

FastAPI Response

```



\---



\## 3. Endpoints



```text

POST /api/stocks/sync-asx-top

GET  /api/stocks/db

```



\---



\## 4. POST /api/stocks/sync-asx-top



This endpoint retrieves selected ASX stock data from Yahoo Finance and saves it into the database.



It performs an upsert-style workflow:



\- if the ticker exists, update the record

\- if the ticker does not exist, create a new record

\- if Yahoo Finance returns an error, skip that record



\---



\## 5. GET /api/stocks/db



This endpoint reads stored stock data directly from SQLite.



It allows the frontend to display database-backed stock data instead of calling Yahoo Finance every time.



\---



\## 6. Files



```text

backend/app/services/stock\_persistence\_service.py

backend/app/routers/stocks.py

backend/app/models/stock.py

backend/app/db/session.py

```



\---



\## 7. Database Table



```text

stocks

```



Fields:



\- id

\- ticker

\- name

\- sector

\- market\_cap

\- currency

\- current\_price



\---



\## 8. Why This Matters



This feature changes QuantLab AI from a stateless API prototype into a database-backed financial analytics platform.



It enables:



\- ETL persistence

\- local market caching

\- faster frontend data loading

\- scheduled sync jobs

\- future PostgreSQL migration

\- production-style data workflows



\---



\## 9. Future Improvements



Planned improvements:



\- scheduled ETL jobs

\- historical price persistence

\- refresh timestamps

\- error logging

\- Alembic migrations

\- PostgreSQL support

\- background workers

