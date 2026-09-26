# ADR-001: Use Visitor for request projections

## Status
Accepted.

## Decision
Each request accepts independent projection visitors.

## Consequences
New projections avoid conditionals and preserve request invariants. Adding a request type requires updating all visitors, which is acceptable for a stable taxonomy.
