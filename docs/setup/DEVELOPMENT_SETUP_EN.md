\# QuantLab AI — Development Setup



\## 1. Repository



GitHub repository:



```text

https://github.com/amin076/quantlab-ai

```



The project uses a fullstack structure with separate backend, frontend, data, and documentation folders.



\---



\## 2. Project Structure



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



\## 3. Backend Environment



The backend uses Python virtual environment.



\### Create virtual environment



```powershell

cd backend

python -m venv .venv

```



\### Activate virtual environment



```powershell

.\\.venv\\Scripts\\Activate.ps1

```



If PowerShell blocks activation:



```powershell

Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

```



\---



\## 4. Backend Dependencies



Installed backend packages:



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



Save dependencies:



```powershell

pip freeze > requirements.txt

```



\---



\## 5. Run Backend Server



From the backend folder:



```powershell

uvicorn app.main:app --reload

```



Backend URLs:



```text

http://127.0.0.1:8000

http://127.0.0.1:8000/api/health

http://127.0.0.1:8000/docs

```



\---



\## 6. Frontend Setup



The frontend uses React and Vite.



```powershell

npm create vite@latest frontend -- --template react

cd frontend

npm install

```



Installed frontend packages:



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



\## 7. Git Ignore



The project ignores:



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



This prevents unnecessary generated files from being pushed to GitHub.



\---



\## 8. Branch Workflow



Current backend foundation work is developed on:



```text

feature/backend-foundation

```



Recommended workflow:



```powershell

git checkout -b feature/name

git add .

git commit -m "Meaningful commit message"

git push origin feature/name

```



Then create a Pull Request on GitHub.

