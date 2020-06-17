export class AreaCode {
  constructor({ id, number, possiblePairs }) {
    this.id = id;
    this.number = number;
    this.possiblePairs = possiblePairs;
  }

  hasPossibleCode(code) {
    return this.possiblePairs.includes(code.id);
  }
}