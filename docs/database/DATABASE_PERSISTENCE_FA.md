\# QuantLab AI — پایه ماندگاری داده‌ها



\## 1. معرفی



این ماژول اولین لایه واقعی ذخیره‌سازی داده را برای QuantLab AI ایجاد می‌کند.



سیستم اکنون از موارد زیر پشتیبانی می‌کند:



\- مدل‌های SQLAlchemy ORM

\- مقداردهی اولیه SQLite

\- persistence ساختاریافته

\- معماری آماده PostgreSQL



این بخش پایه‌ای برای ETL، ذخیره داده بازار، تحلیل پرتفوی و deployment آینده است.



\---



\# 2. معماری دیتابیس



معماری فعلی:



```text

Yahoo Finance

&#x20;       ↓

FastAPI Services

&#x20;       ↓

SQLAlchemy ORM

&#x20;       ↓

SQLite Database

```



معماری آینده production:



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



\# 3. موتور دیتابیس فعلی



دیتابیس فعلی توسعه:



```text

SQLite

```



دلیل انتخاب:



\- سبک بودن

\- setup سریع

\- debugging آسان

\- مناسب MVP



\---



\# 4. مهاجرت آینده دیتابیس



معماری پروژه طوری طراحی شده که در آینده بتواند به:



```text

PostgreSQL

```



مهاجرت کند بدون تغییرات بزرگ.



پروژه از موارد زیر استفاده می‌کند:



\- SQLAlchemy ORM

\- مدل‌های reusable

\- DATABASE\_URL

\- abstraction layer



\---



\# 5. مقداردهی اولیه دیتابیس



منطق مقداردهی اولیه:



```text

backend/app/db/init\_db.py

```



مسئولیت‌ها:



\- ساخت جدول‌ها

\- ایجاد ORM metadata

\- اتصال engine

\- آماده‌سازی persistence layer



\---



\# 6. ORM Model



مدل فعلی:



```text

backend/app/models/stock.py

```



جدول دیتابیس:



```text

stocks

```



\---



\# 7. ساختار جدول stocks



| فیلد | نوع | توضیح |

|---|---|---|

| id | Integer | کلید اصلی |

| ticker | String | نماد ASX |

| name | String | نام شرکت |

| sector | String | صنعت |

| market\_cap | BigInteger | ارزش بازار |

| currency | String | ارز معامله |

| current\_price | Float | آخرین قیمت سهم |



\---



\# 8. ویژگی‌های SQLAlchemy



پیاده‌سازی فعلی شامل:



\- Declarative ORM

\- mapped\_column

\- type-safe fields

\- indexed columns

\- unique constraints



\---



\# 9. اهمیت Persistence



Persistence اهمیت زیادی دارد چون:



\- cache محلی بازار

\- workflowهای ETL

\- ذخیره تاریخی

\- API سریع‌تر

\- analytics processing

\- portfolio calculations

\- scheduled jobs



را ممکن می‌کند.



\---



\# 10. توسعه‌های آینده



برنامه‌های آینده:



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



\# 11. Workflow توسعه



Workflow معمول:



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



\# 12. اهمیت معماری



این ماژول QuantLab AI را از:



```text

Stateless API Application

```



به:



```text

Persistent Financial Analytics Platform

```



تبدیل می‌کند.

