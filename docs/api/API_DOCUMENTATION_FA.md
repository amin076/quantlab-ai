\# QuantLab AI — مستندات API



\## 1. معرفی



Backend پروژه QuantLab AI از طریق FastAPI مجموعه‌ای از REST API endpointها را ارائه می‌دهد.



هدف API ارائه موارد زیر است:



\- داده‌های بازار ASX

\- تحلیل‌های مالی

\- معیارهای ریسک

\- تحلیل پرتفوی

\- نتایج Backtesting



API به‌صورت ماژولار طراحی شده و پاسخ‌ها را به‌صورت JSON برمی‌گرداند.



\---



\## 2. آدرس پایه API



سرور محلی توسعه:



```text

http://127.0.0.1:8000

```



مستندات Swagger:



```text

http://127.0.0.1:8000/docs

```



\---



\## 3. Endpointهای فعلی



| Endpoint | متد | توضیح |

|---|---|---|

| / | GET | وضعیت API |

| /api/health | GET | بررسی سلامت Backend |

| /api/stocks/asx-top | GET | دریافت داده شرکت‌های مهم ASX |



\---



\# 4. Root Endpoint



\## Endpoint



```text

GET /

```



\## توضیح



اطلاعات وضعیت Backend API را برمی‌گرداند.



\## نمونه پاسخ



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



\## توضیح



فعال بودن Backend را بررسی می‌کند.



کاربردها:



\- مانیتورینگ API

\- health check

\- تست deployment



\## نمونه پاسخ



```json

{

&#x20; "status": "ok",

&#x20; "service": "quantlab-ai-backend"

}

```



\---



\# 6. Endpoint شرکت‌های برتر ASX



\## Endpoint



```text

GET /api/stocks/asx-top

```



\## توضیح



داده‌های واقعی برخی شرکت‌های مهم ASX را از Yahoo Finance دریافت می‌کند.



نمادهای فعلی:



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



\## منبع داده



```text

Yahoo Finance

```



با استفاده از:



```python

yfinance

```



\---



\## ساختار پاسخ



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



\## فیلدهای پاسخ



| فیلد | توضیح |

|---|---|

| ticker | نماد ASX |

| name | نام شرکت |

| sector | صنعت شرکت |

| market\_cap | ارزش بازار |

| currency | ارز معامله |

| current\_price | قیمت فعلی سهم |



\---



\# 7. لایه Service



منطق دریافت داده بازار در فایل زیر قرار دارد:



```text

backend/app/services/market\_service.py

```



مسئولیت‌ها:



\- دریافت داده Yahoo Finance

\- پردازش tickerها

\- ساختاردهی پاسخ API

\- مدیریت خطاها



\---



\# 8. لایه Router



Endpointهای سهام در فایل زیر تعریف شده‌اند:



```text

backend/app/routers/stocks.py

```



مسئولیت‌ها:



\- تعریف routeها

\- اتصال endpointها به serviceها

\- برگرداندن JSON response



\---



\# 9. مدیریت خطا



پیاده‌سازی فعلی شامل مدیریت خطا برای موارد زیر است:



\- unavailable ticker data

\- خطاهای Yahoo Finance

\- پاسخ‌های نامعتبر



توسعه‌های آینده:



\- custom exception class

\- retry mechanism

\- مدیریت rate limit

\- logging integration



\---



\# 10. Endpointهای آینده



Endpointهای احتمالی آینده:



| Endpoint | کاربرد |

|---|---|

| /api/stocks/{ticker} | اطلاعات یک سهم |

| /api/prices/{ticker} | قیمت‌های تاریخی |

| /api/analytics/{ticker} | معیارهای ریسک |

| /api/backtest/{ticker} | Backtesting |

| /api/portfolio/analyze | تحلیل پرتفوی |

| /api/sectors | تحلیل صنایع |



\---



\# 11. اهداف طراحی API



API به شکلی طراحی شده که:



\- ماژولار باشد

\- قابل توسعه باشد

\- مناسب Frontend باشد

\- analytics-oriented باشد

\- توسعه آینده آسان باشد

\- برای scaling آینده آماده باشد

