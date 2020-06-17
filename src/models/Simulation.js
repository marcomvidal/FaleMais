import { SimulationResult } from "./SimulationResult";

export class Simulation {
  constructor({ price, plan, callTime }) {
    this.price = price;
    this.plan = plan;
    this.callTime = callTime;
  }

  generate() {
    return new SimulationResult({
      withPlan: this.withPlanCalculation(),
      withoutPlan: this.withoutPlanCalculation()
    });
  }

  withPlanCalculation() {
    const extraTime = this.callTime - this.plan.includedMinutes;
    const taxWithIncrease = this.price.value + (this.price.value * 0.1);

    return extraTime > 0 ? taxWithIncrease * extraTime : 0;
  }

  withoutPlanCalculation() {
    return this.price.value * this.callTime;
  }
}