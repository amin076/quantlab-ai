\# QuantLab AI — راه‌اندازی محیط توسعه



\## 1. ریپازیتوری



آدرس GitHub پروژه:



```text

https://github.com/amin076/quantlab-ai

```



این پروژه به‌صورت Fullstack طراحی شده و شامل بخش‌های جداگانه Backend، Frontend، Data و Documentation است.



\---



\## 2. ساختار پروژه



```text

quantlab-ai/

│

├── backend/

├── frontend/

├── docs/

├── data/

├── README.md

└── .gitignore

```



\---



\## 3. محیط Backend



بخش Backend از virtual environment پایتون استفاده می‌کند.



\### ساخت virtual environment



```powershell

cd backend

python -m venv .venv

```



\### فعال‌سازی virtual environment



```powershell

.\\.venv\\Scripts\\Activate.ps1

```



اگر PowerShell اجازه اجرا نداد:



```powershell

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

```



\---



\## 4. وابستگی‌های Backend



پکیج‌های نصب‌شده Backend:



```text

fastapi

uvicorn

pandas

numpy

yfinance

sqlalchemy

pydantic

pydantic-settings

```



برای ذخیره dependencyها:



```powershell

pip freeze > requirements.txt

```



\---



\## 5. اجرای Backend Server



از داخل پوشه backend:



```powershell

uvicorn app.main:app --reload

```



آدرس‌های Backend:



```text

http://127.0.0.1:8000

http://127.0.0.1:8000/api/health

http://127.0.0.1:8000/docs

```



\---



\## 6. راه‌اندازی Frontend



Frontend با React و Vite ساخته شده است.



```powershell

npm create vite@latest frontend -- --template react

cd frontend

npm install

```



پکیج‌های نصب‌شده Frontend:



```text

@mui/material

@emotion/react

@emotion/styled

react-router-dom

axios

plotly.js

react-plotly.js

```



\---



\## 7. فایل .gitignore



در پروژه موارد زیر ignore شده‌اند:



```text

node\_modules/

.venv/

.env

dist/

\*.db

\*.sqlite

\_\_pycache\_\_/

data/raw/

data/processed/

```



این کار باعث می‌شود فایل‌های سنگین یا تولیدشده وارد GitHub نشوند.



\---



\## 8. روش کار با Branch



توسعه Backend Foundation فعلاً روی branch زیر انجام می‌شود:



```text

feature/backend-foundation

```



روش پیشنهادی کار:



```powershell

git checkout -b feature/name

git add .

git commit -m "Meaningful commit message"

git push origin feature/name

```



بعد در GitHub یک Pull Request ساخته می‌شود.

