export class Price {
  constructor({ id, sourceCode, destinationCode, value }) {
    this.id = id;
    this.sourceCode = sourceCode;
    this.destinationCode = destinationCode;
    this.value = Number(value);
  }

  formattedValue() {
    return this.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }
}