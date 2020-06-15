export class Price {
  constructor({ sourceCode, destinationCode, value }) {
    this.sourceCode = sourceCode;
    this.destinationCode = destinationCode;
    this.value = Number(value);
  }

  formattedValue() {
    return this.value.toLocaleString('pt-BR', {minimumFractionDigits: 2});
  }
}