# Anclora Converter

This repository contains a FastAPI backend and a React frontend. The frontend communicates with the backend using a base URL defined in environment variables.

## Base URL

All API endpoints are served under the `/api` prefix. The frontend expects the backend to be available at `http://localhost:8000` by default.

Create a `.env` file based on `.env.example` and adjust the values if necessary:

```bash
cp .env.example backend/.env
cp .env.example frontend/.env
```

Edit `REACT_APP_BACKEND_URL` in the frontend `.env` file if your backend runs on a different host or port.

## Running locally

1. Install Python dependencies and start the backend:
   ```bash
   pip install -r backend/requirements.txt
   uvicorn backend.server:app --host 0.0.0.0 --port 8000
   ```
2. In another terminal start the frontend:
   ```bash
   cd frontend
   yarn install
   yarn start
   ```
