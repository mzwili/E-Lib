# Bookstore — Modular Monolith

A production-minded full e-commerce bookstore starter built as a modular monolith.

## Stack

- Java 21, Spring Boot 3.5.6, Maven
- React 19, TypeScript, Vite
- PostgreSQL 17, Flyway
- Docker Compose

## Prerequisites

- Docker Engine and Docker Compose plugin
- Git
- (Optional for local development) Java 21+, Maven 3.9+, Node.js 22+

## Run with Docker

1. Copy environment defaults:

   ```bash
   cp .env.example .env
   ```

2. Start the stack:

   ```bash
   docker compose up --build
   ```

3. Open:
   - Frontend: http://localhost:5173
   - Backend health: http://localhost:8080/api/v1/health
   - Actuator health: http://localhost:8080/actuator/health
   - PostgreSQL: localhost:5432

The backend waits for PostgreSQL to become healthy. Flyway applies migrations automatically.

## Run services locally

Start PostgreSQL first:

```bash
docker compose up -d postgres
```

Backend:

```bash
cd backend
mvn spring-boot:run
```

Frontend (in another terminal):

```bash
cd frontend
npm install
npm run dev
```

## Project conventions

- Business modules own their domain, application, API and infrastructure code.
- A module must not access another module's repositories or tables directly.
- Cross-module interaction happens through public application interfaces or domain events.
- Controllers handle HTTP concerns only; business rules belong in domain/application code.
- DTOs are used at API boundaries; JPA entities are never returned directly.
- Flyway owns schema evolution. Do not use Hibernate `ddl-auto=update`.
- Money uses decimal database types and `BigDecimal` in Java.
- Order items store a price snapshot at purchase time.

## Current scope

This is the foundation scaffold: runnable frontend/backend/database, health endpoint, modular package boundaries and an initial relational schema. Authentication, catalogue CRUD, cart workflows, checkout, payment-provider integration and admin functionality are intentionally staged for subsequent milestones.

## Useful commands

```bash
docker compose up --build
docker compose down
docker compose down -v   # DELETES local database data
docker compose logs -f backend
docker compose exec postgres psql -U bookstore -d bookstore
```

Never commit `.env` or real credentials. Replace development secrets before any shared or production deployment.
