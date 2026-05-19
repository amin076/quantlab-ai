\# QuantLab AI — Frontend Architecture



\# 1. Overview



This document describes the frontend architecture of QuantLab AI.



The frontend is designed as a scalable financial analytics dashboard application using:



\- React

\- Vite

\- Material UI

\- React Router

\- Axios

\- feature-based architecture



The architecture prioritizes:



\- scalability

\- maintainability

\- reusable components

\- professional dashboard design

\- clean separation of concerns



\---



\# 2. Frontend Technology Stack



| Technology | Purpose |

|---|---|

| React | UI framework |

| Vite | Development/build system |

| Material UI | Component system |

| React Router | Routing |

| Axios | API communication |

| CSS | Global styling |

| FastAPI | Backend integration |



\---



\# 3. Frontend Folder Structure



```text

frontend/src/

│

├── api/

├── app/

├── components/

├── features/

├── layouts/

├── theme/

├── utils/

└── main.jsx

```



\---



\# 4. Architecture Philosophy



The frontend uses a modular architecture.



Responsibilities are separated into:



\- app foundation

\- API layer

\- reusable layouts

\- reusable UI components

\- feature modules

\- theme system

\- utilities



This approach enables future scalability.



\---



\# 5. App Foundation



\## Directory



```text

src/app/

```



Contains:



\- App.jsx

\- router.jsx

\- providers.jsx



Responsibilities:



\- application bootstrap

\- route management

\- provider management

\- global application setup



\---



\# 6. API Layer



\## Directory



```text

src/api/

```



Files:



```text

client.js

stocksApi.js

```



Responsibilities:



\- backend communication

\- centralized API configuration

\- Axios instance management

\- API abstraction

\- environment-based API URLs



\---



\# 7. Layout System



\## Directory



```text

src/layouts/

```



Files:



```text

DashboardLayout.jsx

Sidebar.jsx

Topbar.jsx

```



Responsibilities:



\- dashboard structure

\- navigation

\- responsive layout

\- reusable page shell



\---



\# 8. Theme System



\## Directory



```text

src/theme/

```



Uses Material UI theme configuration.



Current theme:



```text

Dark analytics dashboard theme

```



Features:



\- dark palette

\- typography system

\- spacing consistency

\- reusable design tokens



\---



\# 9. Feature-Based Architecture



\## Directory



```text

src/features/

```



Current feature modules:



```text

market/

analytics/

portfolio/

```



Each feature can contain:



```text

pages/

components/

hooks/

```



This structure improves scalability and separation.



\---



\# 10. Market Module



\## Current Feature



```text

src/features/market/

```



Current capabilities:



\- ASX market overview

\- database-backed stock table

\- sync actions

\- loading states

\- error handling



\---



\# 11. Data Flow



```text

React Components

&#x20;       ↓

API Layer

&#x20;       ↓

FastAPI Backend

&#x20;       ↓

SQLite Database

&#x20;       ↓

Yahoo Finance

```



\---



\# 12. Current Dashboard Features



Current implemented features:



\- professional dashboard layout

\- sidebar navigation

\- topbar

\- responsive UI

\- market overview page

\- stock synchronization

\- database-backed stock table

\- loading indicators

\- error alerts



\---



\# 13. Scalability Goals



The architecture is designed to support future:



\- analytics dashboards

\- charts

\- portfolio systems

\- authentication

\- watchlists

\- notifications

\- PostgreSQL deployment

\- cloud deployment

\- CI/CD pipelines



\---



\# 14. Future Frontend Roadmap



Planned frontend improvements:



\- charts integration

\- advanced analytics pages

\- authentication

\- portfolio management

\- responsive mobile navigation

\- websocket updates

\- charting dashboards

\- caching strategies

\- state management

\- testing infrastructure



\---



\# 15. Architectural Importance



This frontend architecture transforms QuantLab AI from:



```text

Basic React Starter Project

```



into:



```text

Professional Financial Analytics Dashboard Platform

```

