import { ComfortRequest, MaintenanceRequest, RequestVisitor, SafetyRequest } from "../domain/request";

export class PriorityScoreVisitor implements RequestVisitor<number> {
  visitSafety(request: SafetyRequest): number { return 100 + Math.min(request.peopleExposed, 50); }
  visitComfort(request: ComfortRequest): number { return Math.min(request.daysOpen * 5, 90); }
}

export class PrioritizeRequests {
  constructor(private readonly visitor: RequestVisitor<number>) {}
  execute(requests: MaintenanceRequest[]) {
    return requests.map((request) => ({ request, score: request.accept(this.visitor) })).sort((a, b) => b.score - a.score);
  }
}
