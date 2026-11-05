# Implementation Roadmap

## Milestone 1 — Foundation (this scaffold)
- [x] Monorepo and module boundaries
- [x] Docker Compose for PostgreSQL, backend and frontend
- [x] Flyway initial schema
- [x] Backend health endpoint
- [x] React landing-page starting point
- [x] Architecture and database documentation

## Milestone 2 — Identity and access
- [ ] Registration and login use cases
- [ ] Password hashing and Spring Security
- [ ] Access/refresh token strategy and logout
- [ ] Role and resource ownership tests

## Milestone 3 — Catalogue and inventory
- [ ] Book/category/author CRUD
- [ ] Search, filters, sorting and pagination
- [ ] Book detail page and image handling
- [ ] Inventory adjustments and concurrency-safe stock updates

## Milestone 4 — Cart and checkout
- [ ] Cart lifecycle and quantity validation
- [ ] Price/availability revalidation at checkout
- [ ] Order creation and immutable line-item snapshots
- [ ] Delivery address snapshot

## Milestone 5 — Payments and fulfilment
- [ ] Payment-provider adapter and sandbox integration
- [ ] Webhook signature verification and idempotency
- [ ] Order state transitions
- [ ] Inventory reservation/release workflow
- [ ] Transactional outbox

## Milestone 6 — Quality and delivery
- [ ] Unit and application tests
- [ ] PostgreSQL integration tests with Testcontainers
- [ ] Playwright customer journey tests
- [ ] CI pipeline and image publishing
- [ ] Production secrets, HTTPS, observability and backups
