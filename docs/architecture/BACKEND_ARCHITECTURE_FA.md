\# QuantLab AI — معماری Backend



\## 1. معرفی



بخش Backend پروژه QuantLab AI با معماری ماژولار FastAPI طراحی شده است.



Backend مسئول بخش‌های زیر است:



\- دریافت داده‌های بازار

\- ETL Pipeline

\- محاسبات تحلیلی

\- معیارهای ریسک

\- منطق Backtesting

\- API Endpointها

\- ارتباط با دیتابیس



معماری Backend به شکلی طراحی شده که:



\- قابل توسعه باشد

\- ماژولار باشد

\- نگهداری آن آسان باشد

\- ساختار حرفه‌ای داشته باشد

\- در آینده به‌راحتی گسترش پیدا کند



\---



\## 2. تکنولوژی‌های Backend



| تکنولوژی | کاربرد |

|---|---|

| Python 3.13 | زبان اصلی |

| FastAPI | فریم‌ورک REST API |

| SQLAlchemy | ORM و لایه دیتابیس |

| SQLite | دیتابیس اولیه |

| Pandas | تحلیل داده |

| NumPy | محاسبات عددی |

| yfinance | دریافت داده بازار |

| Pydantic | اعتبارسنجی داده |

| Uvicorn | اجرای ASGI Server |



\---



\## 3. ساختار پوشه‌های Backend



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



\## 4. برنامه اصلی



برنامه اصلی FastAPI در فایل زیر قرار دارد:



```text

app/main.py

```



مسئولیت‌ها:



\- ساخت FastAPI app

\- تنظیم middleware

\- ثبت routerها

\- ارائه API endpointها

\- تنظیم CORS



\---



\## 5. لایه Core



\### config.py



شامل تنظیمات مرکزی پروژه است.



مانند:



\- نام برنامه

\- نسخه

\- آدرس دیتابیس

\- allowed origins



این طراحی امکان استفاده از environment configuration را در آینده فراهم می‌کند.



\---



\### constants.py



شامل ثابت‌های قابل استفاده مجدد پروژه است.



مثال‌ها:



\- لیست tickerهای ASX

\- mapping صنایع

\- تنظیمات پیش‌فرض



\---



\## 6. لایه Routers



لایه routerها مسئول تعریف API endpointها است.



Router فعلی:



```text

health.py

```



Endpoint فعلی:



```text

/api/health

```



کاربرد:



\- health check

\- بررسی فعال بودن backend

\- تست API



Routerهای آینده:



```text

stocks.py

portfolio.py

analytics.py

backtesting.py

market.py

```



\---



\## 7. لایه Services



لایه services شامل business logic پروژه است.



مثال‌ها:



\- دریافت داده بازار

\- محاسبات مالی

\- تحلیل پرتفوی

\- پردازش داده‌های تحلیلی



این طراحی باعث جداسازی business logic از API routing می‌شود.



\---



\## 8. لایه ETL



لایه ETL مسئول:



\### Extract

دریافت داده بازار از منابع خارجی



\### Transform

پاک‌سازی و پردازش داده مالی



\### Load

ذخیره داده پردازش‌شده در دیتابیس



در آینده ممکن است شامل:



\- batch processing

\- scheduled updates

\- multi-source ingestion



باشد.



\---



\## 9. لایه Analytics



مسئول:



\- محاسبه volatility

\- محاسبه Sharpe ratio

\- تحلیل drawdown

\- moving averages

\- rolling statistics

\- correlation metrics



این بخش موتور اصلی تحلیل کمی پروژه خواهد بود.



\---



\## 10. لایه Database



لایه دیتابیس از SQLAlchemy استفاده می‌کند.



\### base.py



تعریف ORM base.



\### session.py



ساخت:



\- database engine

\- session factory

\- اتصال SQLite



دیتابیس فعلی:



```text

SQLite

```



گزینه آینده:



```text

PostgreSQL

```



\---



\## 11. لایه Schemas



لایه schemas شامل Pydantic schemaها خواهد بود.



برای:



\- اعتبارسنجی request

\- serialization پاسخ‌ها

\- تعریف API contractها



\---



\## 12. لایه Utils



شامل توابع کمکی reusable است.



مثال‌ها:



\- date helpers

\- formatting helpers

\- calculation helpers

\- logging helpers



\---



\## 13. اهداف معماری



هدف معماری Backend:



\- جداسازی مسئولیت‌ها

\- طراحی API قابل توسعه

\- reusable serviceها

\- codebase قابل نگهداری

\- ساختار حرفه‌ای مهندسی نرم‌افزار



است.



\---



\## 14. توسعه‌های آینده



برنامه‌های آینده Backend:



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

