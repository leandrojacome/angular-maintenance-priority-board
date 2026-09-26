import { describe, expect, it } from "vitest";
import { ComfortRequest, SafetyRequest } from "../domain/request";
import { PriorityScoreVisitor, PrioritizeRequests } from "./prioritize-requests";

describe("PrioritizeRequests", () => {
  it("places a safety request before an older comfort request", () => {
    const result = new PrioritizeRequests(new PriorityScoreVisitor()).execute([
      new ComfortRequest("comfort", "Warm lobby", 20),
      new SafetyRequest("safety", "Emergency light", 1),
    ]);
    expect(result.map((item) => item.request.id)).toEqual(["safety", "comfort"]);
  });
});
