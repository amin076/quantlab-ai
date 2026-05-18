\# QuantLab AI — داده‌های تاریخی بازار



\## 1. معرفی



این ماژول مسئول دریافت داده‌های تاریخی بازار برای سهام ASX است.



سیستم داده‌های OHLCV را از Yahoo Finance دریافت کرده و با استفاده از Pandas DataFrame پردازش می‌کند.



این feature پایه‌ای برای موارد زیر ایجاد می‌کند:



\- ETL Pipeline

\- تحلیل کمی

\- تحلیل سری زمانی

\- رسم نمودار

\- تحلیل ریسک

\- Backtesting



\---



\## 2. API Endpoint



```text

GET /api/prices/{ticker}

```



مثال:



```text

/api/prices/CBA.AX

/api/prices/BHP.AX?period=1y

```



\---



\## 3. پارامترهای پشتیبانی‌شده



| پارامتر | توضیح | پیش‌فرض |

|---|---|---|

| ticker | نماد ASX | اجباری |

| period | بازه تاریخی | 6mo |



\---



\## 4. منبع داده



داده‌های تاریخی از:



```text

Yahoo Finance

```



با استفاده از:



```python

yfinance

```



دریافت می‌شوند.



\---



\## 5. Historical Service



منطق دریافت داده تاریخی در فایل زیر قرار دارد:



```text

backend/app/services/historical\_service.py

```



مسئولیت‌ها:



\- دریافت داده تاریخی بازار

\- پردازش Pandas DataFrame

\- بررسی داده خالی

\- تبدیل DataFrame به JSON

\- آماده‌سازی پاسخ مناسب Frontend



\---



\## 6. جریان پردازش داده



```text

Yahoo Finance

&#x20;       ↓

yfinance

&#x20;       ↓

Pandas DataFrame

&#x20;       ↓

پاک‌سازی داده

&#x20;       ↓

تبدیل به JSON

&#x20;       ↓

پاسخ FastAPI

```



\---



\## 7. فیلدهای داده بازار



API فعلاً این داده‌ها را برمی‌گرداند:



| فیلد | توضیح |

|---|---|

| Date | تاریخ معامله |

| Open | قیمت باز شدن |

| High | بیشترین قیمت |

| Low | کمترین قیمت |

| Close | قیمت بسته شدن |

| Volume | حجم معامله |



\---



\## 8. پردازش DataFrame



مراحل فعلی پردازش:



\- دریافت DataFrame

\- reset index

\- تبدیل تاریخ به string

\- انتخاب ستون‌های OHLCV

\- تبدیل رکوردها به JSON



\---



\## 9. نمونه پاسخ



```json

{

&#x20; "ticker": "CBA.AX",

&#x20; "period": "6mo",

&#x20; "total\_records": 126,

&#x20; "prices": \[

&#x20;   {

&#x20;     "Date": "2026-01-10",

&#x20;     "Open": 152.3,

&#x20;     "High": 154.1,

&#x20;     "Low": 151.8,

&#x20;     "Close": 153.7,

&#x20;     "Volume": 1234567

&#x20;   }

&#x20; ]

}

```



\---



\## 10. اهمیت معماری



این ماژول اهمیت زیادی دارد چون پایه موارد زیر را ایجاد می‌کند:



\- مدیریت financial time-series

\- workflowهای تحلیلی Pandas

\- پایه ETL

\- منبع داده برای chartهای Frontend

\- ورودی reusable برای analytics



\---



\## 11. توسعه‌های آینده



برنامه‌های آینده:



\- ذخیره در SQLite

\- cache داده تاریخی

\- incremental ETL updates

\- moving averages

\- محاسبه returns

\- تحلیل volatility

\- rolling statistics

\- technical indicators

\- async market ingestion

