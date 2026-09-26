# Maintenance Priority Board with Angular

An Angular standalone application that ranks safety and comfort maintenance requests with explainable scores.

## Architecture and patterns

The Maintenance Prioritization bounded context models heterogeneous request types. Visitor is a deliberate fit: request types are stable while scoring, reporting, and SLA projections may grow. `PrioritizeRequests` is a framework-independent use case; Angular is the delivery adapter. Dependency inversion and small immutable domain objects keep the design testable.

```bash
npm ci
npm test
npm run build
```

See [architecture](docs/architecture.md) and [ADR-001](docs/adr/001-visitor-priority.md).
