export class SimulationResult {
  constructor({ plan, withPlan, withoutPlan }) {
    this.plan = plan;
    this.withPlan = withPlan;
    this.withoutPlan = withoutPlan;
  }

  isPlanMoreAdvantageous() {
    return this.withPlan < this.withoutPlan;
  }
}