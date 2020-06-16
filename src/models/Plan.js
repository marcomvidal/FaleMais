export class Plan {
  constructor({ id, brand, includedMinutes, extraTax }) {
    this.id = id;
    this.brand = brand;
    this.includedMinutes = Number(includedMinutes);
    this.extraTax = Number(extraTax);
  }
}