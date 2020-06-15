export class Plan {
  constructor({ brand, includedMinutes, extraTax }) {
    this.brand = brand;
    this.includedMinutes = Number(includedMinutes);
    this.extraTax = Number(extraTax);
  }
}