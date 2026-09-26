export interface RequestVisitor<T> {
  visitSafety(request: SafetyRequest): T;
  visitComfort(request: ComfortRequest): T;
}

export interface MaintenanceRequest { readonly id: string; readonly summary: string; accept<T>(visitor: RequestVisitor<T>): T; }

export class SafetyRequest implements MaintenanceRequest {
  constructor(readonly id: string, readonly summary: string, readonly peopleExposed: number) {}
  accept<T>(visitor: RequestVisitor<T>): T { return visitor.visitSafety(this); }
}

export class ComfortRequest implements MaintenanceRequest {
  constructor(readonly id: string, readonly summary: string, readonly daysOpen: number) {}
  accept<T>(visitor: RequestVisitor<T>): T { return visitor.visitComfort(this); }
}
