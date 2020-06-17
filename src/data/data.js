import { AreaCode } from '../models/AreaCode';
import { Price } from '../models/Price';
import { Plan } from '../models/Plan';

export const areaCodes = [
  new AreaCode({ id: 1, number: '011', possiblePairs: [2, 3, 4] }),
  new AreaCode({ id: 2, number: '016', possiblePairs: [1] }),
  new AreaCode({ id: 3, number: '017', possiblePairs: [1] }),
  new AreaCode({ id: 4, number: '018', possiblePairs: [1] })
];

export const prices = [
  new Price({ id: 1, sourceCode: areaCodes[0], destinationCode: areaCodes[1], value: 1.9 }),
  new Price({ id: 2, sourceCode: areaCodes[1], destinationCode: areaCodes[0], value: 2.9 }),
  new Price({ id: 3, sourceCode: areaCodes[0], destinationCode: areaCodes[2], value: 1.7 }),
  new Price({ id: 4, sourceCode: areaCodes[2], destinationCode: areaCodes[0], value: 2.7 }),
  new Price({ id: 5, sourceCode: areaCodes[0], destinationCode: areaCodes[3], value: 0.9 }),
  new Price({ id: 6, sourceCode: areaCodes[3], destinationCode: areaCodes[0], value: 1.9 })
];

export const plans = [
  new Plan({ id: 1, brand: 'FaleMais 30', includedMinutes: 30, extraTax: 0.1 }),
  new Plan({ id: 2, brand: 'FaleMais 60', includedMinutes: 60, extraTax: 0.1 }),
  new Plan({ id: 3, brand: 'FaleMais 120', includedMinutes: 120, extraTax: 0.1 })
];