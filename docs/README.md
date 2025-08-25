# Sugarcane Farming System – Starter

Monorepo with **Spring Boot backend**, **React (Vite) frontend**, **FastAPI AI service**, and **MySQL**.

## Quick Start (Local)
1. Start MySQL (or use Docker Compose below) and set `spring.datasource.*` in `backend/src/main/resources/application.yml`.
2. Backend:
   ```bash
   cd backend
   ./mvnw spring-boot:run   # or mvn spring-boot:run
   ```
3. Frontend:
   ```bash
   cd frontend
   npm i
   npm run dev
   # open http://localhost:5173
   ```
4. AI Service:
   ```bash
   cd ai-service
   pip install -r requirements.txt
   uvicorn main:app --reload --port 8000
   ```

## APIs
- Backend health: `GET http://localhost:8080/api/health`
- Crops sample: `GET http://localhost:8080/api/crops`
- AI health: `GET http://localhost:8000/`
- AI predict: `POST http://localhost:8000/predict` (multipart form field `image`)

## Env
- Frontend reads `VITE_API_URL` to call backend (defaults to `http://localhost:8080`).

## Docker Compose
See root `docker-compose.yml` to run MySQL + Backend + Frontend (nginx) + AI.
