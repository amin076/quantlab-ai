\# QuantLab AI — پایه دیتابیس



\## 1. معرفی



پلتفرم QuantLab AI از یک لایه دیتابیس برای ذخیره و مدیریت داده‌های مالی، نتایج تحلیل‌ها و اطلاعات پرتفوی استفاده می‌کند.



طراحی اولیه دیتابیس بر پایه موارد زیر انجام شده است:



\- سادگی

\- قابلیت نگهداری

\- توسعه محلی آسان

\- نمونه‌سازی سریع



دیتابیس فعلی نسخه MVP:



```text

SQLite

```



معماری پروژه به شکلی طراحی شده که مهاجرت به PostgreSQL در آینده آسان باشد.



\---



\## 2. تکنولوژی فعلی دیتابیس



| تکنولوژی | کاربرد |

|---|---|

| SQLite | دیتابیس محلی MVP |

| SQLAlchemy | ORM و abstraction لایه دیتابیس |



\---



\## 3. چرا SQLite؟



SQLite برای نسخه اولیه انتخاب شده چون:



\- سبک است

\- نیاز به server setup ندارد

\- توسعه محلی را آسان می‌کند

\- برای prototype سریع مناسب است

\- برای portfolio project عالی است

\- هزینه زیرساخت ندارد



SQLite برای موارد زیر کاملاً کافی است:



\- توسعه ETL

\- تست analytics

\- توسعه API

\- تست داشبورد محلی



\---



\## 4. چرا SQLAlchemy؟



SQLAlchemy امکانات زیر را فراهم می‌کند:



\- ORM abstraction

\- قابلیت انتقال بین دیتابیس‌ها

\- منطق تمیزتر دیتابیس

\- queryهای قابل نگهداری

\- مهاجرت آسان‌تر به PostgreSQL



پروژه تا حد امکان از raw SQL استفاده نمی‌کند تا maintainability بهتر شود.



\---



\## 5. معماری دیتابیس



معماری فعلی:



```text

FastAPI

&#x20;   ↓

SQLAlchemy ORM

&#x20;   ↓

SQLite Database

```



معماری scalable آینده:



```text

FastAPI

&#x20;   ↓

SQLAlchemy ORM

&#x20;   ↓

PostgreSQL

```



\---



\## 6. تنظیمات دیتابیس



تنظیمات دیتابیس در فایل زیر متمرکز شده‌اند:



```text

app/core/config.py

```



تنظیم فعلی:



```python

DATABASE\_URL = "sqlite:///./quantlab.db"

```



این طراحی امکان استفاده از environment configuration در آینده را فراهم می‌کند.



\---



\## 7. Database Engine



ساخت database engine در فایل زیر انجام می‌شود:



```text

app/db/session.py

```



مسئولیت‌ها:



\- ساخت SQLAlchemy engine

\- تنظیم اتصال SQLite

\- ساخت session factory



تنظیم فعلی SQLite:



```python

connect\_args={"check\_same\_thread": False}

```



این تنظیم برای سازگاری SQLite با FastAPI ضروری است.



\---



\## 8. Declarative Base



ORM declarative base در فایل زیر تعریف شده است:



```text

app/db/base.py

```



کاربرد:



\- ساخت base مشترک مدل‌ها

\- پشتیبانی از ORM modelهای آینده

\- متمرکزسازی inheritance مدل‌ها



\---



\## 9. جدول‌های آینده دیتابیس



جدول‌های احتمالی آینده:



| جدول | کاربرد |

|---|---|

| stocks | اطلاعات سهام |

| stock\_prices | قیمت‌های تاریخی |

| risk\_metrics | معیارهای تحلیلی |

| portfolios | تعریف پرتفوی |

| portfolio\_holdings | دارایی‌های پرتفوی |

| backtests | نتایج استراتژی‌ها |

| sectors | اطلاعات صنایع |



\---



\## 10. اهداف ذخیره‌سازی داده



لایه دیتابیس باید بتواند:



\- داده تاریخی بازار

\- cache تحلیل‌ها

\- اطلاعات پرتفوی

\- نتایج استراتژی‌ها

\- خلاصه‌های AI آینده



را ذخیره کند.



\---



\## 11. توسعه‌های آینده دیتابیس



برنامه‌های آینده:



\- مهاجرت به PostgreSQL

\- indexing

\- query optimization

\- Alembic migration

\- async database support

\- Redis caching

\- data partitioning

\- scheduled cleanup jobs



\---



\## 12. ملاحظات مقیاس‌پذیری



معماری فعلی عمداً به شکلی طراحی شده که:



\- توسعه MVP ساده بماند

\- scaling آینده ممکن باشد

\- نیاز به rewrite کم شود

\- separation of concerns حفظ شود



این طراحی اجازه می‌دهد پروژه از:



```text

یک portfolio project محلی

```



به سمت:



```text

یک analytics platform قابل توسعه

```



حرکت کند بدون اینکه نیاز به redesign اساسی داشته باشد.

