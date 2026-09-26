import { Component } from "@angular/core";
import { PriorityScoreVisitor, PrioritizeRequests } from "./application/prioritize-requests";
import { ComfortRequest, SafetyRequest } from "./domain/request";

@Component({
  selector: "app-root",
  standalone: true,
  template: `<main><p class="eyebrow">Operations / Maintenance</p><h1>Priority board</h1><p>Explainable ordering for mixed maintenance requests.</p><ol>@for (item of ranked; track item.request.id) {<li><span>{{ item.request.summary }}</span><strong>{{ item.score }}</strong></li>}</ol></main>`,
})
export class AppComponent {
  readonly ranked = new PrioritizeRequests(new PriorityScoreVisitor()).execute([
    new ComfortRequest("r-1", "Lobby air conditioning", 8),
    new SafetyRequest("r-2", "Garage emergency light", 30),
    new ComfortRequest("r-3", "Pool heater", 3),
  ]);
}
