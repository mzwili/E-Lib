# ADR 0001: Start with a modular monolith

- Status: Accepted
- Date: 2026-11-05

## Context

The bookstore needs a manageable initial deployment but may grow in traffic, team size and operational complexity. Starting with distributed services would introduce deployment, network, observability and data-consistency costs before they are justified.

## Decision

Build one Spring Boot backend deployable with business modules and enforced dependency boundaries. Use a single PostgreSQL instance initially. Keep the React frontend as a separate web application.

## Consequences

Positive:
- Simple local development and deployment.
- In-process calls and local transactions where appropriate.
- Clear domain boundaries support testing and future extraction.

Trade-offs:
- Teams must actively protect module boundaries.
- A single backend release affects all backend modules.
- Independent scaling is not available until a module is extracted.

## Revisit when

A module has a demonstrated need for independent scaling, deployment, ownership or fault isolation.
