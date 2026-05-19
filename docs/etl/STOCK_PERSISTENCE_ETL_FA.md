\# QuantLab AI — پایپ‌لاین ذخیره‌سازی سهام



\## 1. معرفی



این سند اولین workflow واقعی ETL و persistence را در پروژه QuantLab AI توضیح می‌دهد.



سیستم اکنون می‌تواند داده زنده سهام ASX را از Yahoo Finance دریافت کند، با استفاده از SQLAlchemy ORM در SQLite ذخیره یا به‌روزرسانی کند، و سپس داده‌های ذخیره‌شده را از طریق FastAPI برگرداند.



\---



\## 2. جریان ETL



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



\## 3. Endpointها



```text

POST /api/stocks/sync-asx-top

GET  /api/stocks/db

```



\---



\## 4. POST /api/stocks/sync-asx-top



این endpoint داده سهام منتخب ASX را از Yahoo Finance دریافت کرده و در دیتابیس ذخیره می‌کند.



رفتار آن شبیه upsert است:



\- اگر ticker از قبل وجود داشته باشد، رکورد به‌روزرسانی می‌شود

\- اگر ticker وجود نداشته باشد، رکورد جدید ساخته می‌شود

\- اگر Yahoo Finance خطا بدهد، آن رکورد نادیده گرفته می‌شود



\---



\## 5. GET /api/stocks/db



این endpoint داده‌های ذخیره‌شده را مستقیم از SQLite می‌خواند.



این کار باعث می‌شود frontend بتواند داده‌های database-backed را نمایش دهد، بدون اینکه هر بار مستقیم از Yahoo Finance داده بگیرد.



\---



\## 6. فایل‌ها



```text

backend/app/services/stock\_persistence\_service.py

backend/app/routers/stocks.py

backend/app/models/stock.py

backend/app/db/session.py

```



\---



\## 7. جدول دیتابیس



```text

stocks

```



فیلدها:



\- id

\- ticker

\- name

\- sector

\- market\_cap

\- currency

\- current\_price



\---



\## 8. اهمیت این مرحله



این feature پروژه QuantLab AI را از یک API تقریباً stateless به یک پلتفرم تحلیل مالی database-backed تبدیل می‌کند.



این مرحله امکان موارد زیر را فراهم می‌کند:



\- ETL persistence

\- cache محلی داده بازار

\- سرعت بهتر برای frontend

\- scheduled sync jobs

\- مهاجرت آینده به PostgreSQL

\- workflowهای شبیه production



\---



\## 9. توسعه‌های آینده



برنامه‌های آینده:



\- scheduled ETL jobs

\- ذخیره قیمت‌های تاریخی

\- refresh timestamp

\- error logging

\- Alembic migrations

\- پشتیبانی PostgreSQL

\- background workers

