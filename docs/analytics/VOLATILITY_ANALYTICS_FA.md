\# QuantLab AI — تحلیل نوسان‌پذیری



\## 1. معرفی



این ماژول تحلیل‌های آماری نوسان‌پذیری و ریسک را برای سهام ASX با استفاده از داده‌های تاریخی بازار فراهم می‌کند.



موتور تحلیلی موارد زیر را محاسبه می‌کند:



\- نوسان‌پذیری روزانه

\- نوسان‌پذیری سالانه

\- rolling volatility



با استفاده از Pandas DataFrame و فرمول‌های مالی کمی.



این بخش پایه‌ای برای تحلیل‌های مالی مبتنی بر ریسک ایجاد می‌کند.



\---



\## 2. API Endpoint



```text

GET /api/analytics/volatility/{ticker}

```



مثال:



```text

/api/analytics/volatility/CBA.AX

/api/analytics/volatility/BHP.AX?period=6mo

```



\---



\## 3. پارامترهای پشتیبانی‌شده



| پارامتر | توضیح | پیش‌فرض |

|---|---|---|

| ticker | نماد ASX | اجباری |

| period | بازه تاریخی داده | 1y |



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



منطق تحلیل نوسان‌پذیری در فایل زیر قرار دارد:



```text

backend/app/analytics/volatility.py

```



مسئولیت‌ها:



\- دریافت قیمت‌های تاریخی

\- محاسبه نوسان بازدهی

\- محاسبه ریسک سالانه

\- rolling volatility

\- پردازش Pandas DataFrame

\- برگرداندن JSON مناسب Frontend



\---



\## 6. جریان پردازش تحلیل



```text

Yahoo Finance

&#x20;       ↓

قیمت‌های تاریخی

&#x20;       ↓

بازدهی روزانه

&#x20;       ↓

انحراف معیار

&#x20;       ↓

نوسان‌پذیری سالانه

&#x20;       ↓

Rolling Volatility

&#x20;       ↓

JSON Response

```



\---



\## 7. فرمول نوسان‌پذیری



نوسان‌پذیری روزانه با استفاده از انحراف معیار بازدهی محاسبه می‌شود:



:contentReference\[oaicite:2]{index=2}



که در آن:



| نماد | معنی |

|---|---|

| \\( \\sigma \\) | نوسان‌پذیری |

| \\( R\_i \\) | بازدهی |

| \\( \\bar{R} \\) | میانگین بازدهی |



پیاده‌سازی:



```python

df\["daily\_return"].std()

```



\---



\## 8. نوسان‌پذیری سالانه



نوسان‌پذیری سالانه با فرمول زیر محاسبه می‌شود:



:contentReference\[oaicite:3]{index=3}



که در آن:



| نماد | معنی |

|---|---|

| \\( \\sigma\_{daily} \\) | نوسان‌پذیری روزانه |

| 252 | تعداد تقریبی روزهای معاملاتی سال |



پیاده‌سازی:



```python

daily\_volatility \* np.sqrt(252)

```



\---



\## 9. Rolling Volatility



Rolling volatility با استفاده از پنجره متحرک 20 روزه محاسبه می‌شود:



```python

df\["daily\_return"]

&#x20;   .rolling(window=20)

&#x20;   .std()

```



این روش امکان مشاهده تغییرات ریسک در طول زمان را فراهم می‌کند.



\---



\## 10. نمونه پاسخ



```json

{

&#x20; "ticker": "CBA.AX",

&#x20; "period": "1y",

&#x20; "daily\_volatility": 0.012,

&#x20; "annualized\_volatility": 0.19,

&#x20; "total\_records": 230,

&#x20; "volatility\_data": \[

&#x20;   {

&#x20;     "Date": "2026-01-10",

&#x20;     "Close": 153.7,

&#x20;     "daily\_return": 0.0042,

&#x20;     "rolling\_volatility": 0.18

&#x20;   }

&#x20; ]

}

```



\---



\## 11. اهمیت معماری



این ماژول موارد زیر را وارد پروژه می‌کند:



\- تحلیل آماری مالی

\- محاسبات کمی ریسک

\- rolling analytics

\- risk metrics قابل reuse

\- داده مناسب frontend analytics



\---



\## 12. توسعه‌های آینده



برنامه‌های آینده:



\- Sharpe ratio

\- Sortino ratio

\- Value at Risk (VaR)

\- beta calculations

\- portfolio volatility

\- covariance matrices

\- correlation analytics

\- Monte Carlo simulations

