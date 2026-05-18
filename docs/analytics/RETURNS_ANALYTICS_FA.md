\# QuantLab AI — تحلیل بازدهی



\## 1. معرفی



این ماژول تحلیل‌های بازدهی کمی برای سهام ASX را با استفاده از داده‌های تاریخی بازار فراهم می‌کند.



سیستم تحلیلی موارد زیر را محاسبه می‌کند:



\- بازدهی روزانه

\- بازدهی تجمعی



با استفاده از پردازش Pandas DataFrame.



این بخش پایه‌ای برای تحلیل‌های مالی کمی آینده ایجاد می‌کند.



\---



\## 2. API Endpoint



```text

GET /api/analytics/returns/{ticker}

```



مثال:



```text

/api/analytics/returns/CBA.AX

/api/analytics/returns/BHP.AX?period=1y

```



\---



\## 3. پارامترهای پشتیبانی‌شده



| پارامتر | توضیح | پیش‌فرض |

|---|---|---|

| ticker | نماد ASX | اجباری |

| period | بازه تاریخی داده | 6mo |



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



\## 5. ماژول تحلیل



منطق تحلیل بازدهی در فایل زیر قرار دارد:



```text

backend/app/analytics/returns.py

```



مسئولیت‌ها:



\- دریافت قیمت‌های تاریخی

\- محاسبه بازدهی روزانه

\- محاسبه بازدهی تجمعی

\- پردازش Pandas DataFrame

\- برگرداندن JSON مناسب Frontend



\---



\## 6. جریان پردازش تحلیل



```text

Yahoo Finance

&#x20;       ↓

قیمت‌های تاریخی

&#x20;       ↓

Pandas DataFrame

&#x20;       ↓

بازدهی روزانه

&#x20;       ↓

بازدهی تجمعی

&#x20;       ↓

JSON Response

```



\---



\## 7. فرمول بازدهی روزانه



بازدهی روزانه با فرمول زیر محاسبه می‌شود:



:contentReference\[oaicite:2]{index=2}



که در آن:



| نماد | معنی |

|---|---|

| \\(R\_t\\) | بازدهی روزانه |

| \\(P\_t\\) | قیمت بسته شدن فعلی |

| \\(P\_{t-1}\\) | قیمت بسته شدن قبلی |



پیاده‌سازی:



```python

df\["daily\_return"] = df\["Close"].pct\_change()

```



\---



\## 8. فرمول بازدهی تجمعی



بازدهی تجمعی با استفاده از compounded returns محاسبه می‌شود:



:contentReference\[oaicite:3]{index=3}



پیاده‌سازی:



```python

df\["cumulative\_return"] = (1 + df\["daily\_return"]).cumprod() - 1

```



\---



\## 9. نمونه پاسخ



```json

{

&#x20; "ticker": "CBA.AX",

&#x20; "period": "6mo",

&#x20; "total\_records": 120,

&#x20; "analytics": \[

&#x20;   {

&#x20;     "Date": "2026-01-10",

&#x20;     "Close": 153.7,

&#x20;     "daily\_return": 0.0042,

&#x20;     "cumulative\_return": 0.1285

&#x20;   }

&#x20; ]

}

```



\---



\## 10. اهمیت معماری



این ماژول اهمیت زیادی دارد چون:



\- تحلیل کمی را وارد پروژه می‌کند

\- محاسبات مالی آماری ایجاد می‌کند

\- analytics pipeline قابل reuse فراهم می‌کند

\- workflowهای محاسباتی Pandas ایجاد می‌کند

\- داده مناسب frontend analytics فراهم می‌کند



\---



\## 11. توسعه‌های آینده



برنامه‌های آینده:



\- volatility

\- rolling volatility

\- Sharpe ratio

\- Sortino ratio

\- drawdown analysis

\- moving averages

\- technical indicators

\- portfolio analytics

\- risk-adjusted metrics

