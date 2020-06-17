export class SimulationResult {
  constructor({ withPlan, withoutPlan }) {
    this.withPlan = withPlan;
    this.withoutPlan = withoutPlan;
  }

  isPlanMoreAdvantageous() {
    return this.withPlan < this.withoutPlan;
  }
}