# AI Knowledge Inbox

GitHub repository: https://github.com/NavyaNakka/AI-KNOWLEDGE-INBOX

## Overview

AI Knowledge Inbox is a full-stack knowledge ingestion and retrieval app.
- Backend: Express + SQLite + Google Gemini API
- Frontend: React + Vite + Tailwind CSS

The app lets you ingest text or URLs, store them in a local SQLite database, generate embeddings, and query the knowledge base with an AI-powered response.

## Local Setup

### Prerequisites

- Node.js 20+ installed
- npm installed
- Google Gemini API key

### Backend setup

1. Open a terminal in `backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `backend/` with:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
4. Start the backend:
   ```bash
   npm run dev
   ```

The backend listens on `http://localhost:5000` by default and exposes APIs under `/api/`.

### Frontend setup

1. Open a terminal in `frontend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```

Open the Vite URL printed in the terminal (usually `http://localhost:5173`).

## Design Decisions

### Backend

- `Express` provides a lightweight API server with minimal boilerplate.
- `SQLite` is used for local persistence so the app can run without external databases.
- `dotenv` loads secrets from `.env`, keeping API keys out of source control.
- The backend builds a simple ingestion flow with items, chunks, and embeddings to support semantic retrieval.

### Frontend

- `React` and `Vite` enable fast local development and a responsive UI.
- `Tailwind CSS` is used for styling without a heavy CSS toolchain.
- The frontend is kept simple to focus on the knowledge ingestion/query workflow.

## Tradeoffs

- **SQLite** is easy to run locally but not ideal for high concurrency or horizontal scaling.
- **Google Gemini** provides powerful AI responses, but it requires a valid API key and network access.
- The app favors simplicity and local development over production-ready infrastructure.
- The current setup uses a local database file that is ignored in git to prevent leaking state.

## Notes

- The repository already ignores `.env` and local database files via `.gitignore`.
- If you want to deploy this app, replace SQLite with a managed database and secure the API key with a secrets service.

---

Enjoy exploring the AI Knowledge Inbox!
