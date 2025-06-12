# Automated Regulatory Filing System for Small Public Companies

Generates SEC filings (10-K, 10-Q, 8-K) from financial/operational data, tracks deadlines, manages XBRL tagging, flags inconsistencies vs prior filings. XBRL + financial modeling is substantial.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery, PostgreSQL (sqlite fallback)
- **Frontend:** React 18 + Vite
- **15 Apps:** filings, xbrl, financials, compliance, edgar, audit, documents, workflow, api, frontend, analytics, integrations, templates, notifications, reports

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t regulatory-filing .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A filing worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Filings:** 10-K (annual), 10-Q (quarterly), 8-K (current) with deadlines `2025-10-11`
- **XBRL:** tagging `us-gaap:Assets`, taxonomy `2024`, validation, rendering
- **Financials:** statements, notes, MD&A, segments, tie-outs
- **Compliance:** deadlines, checklists, flags vs prior filings

## License
Proprietary
