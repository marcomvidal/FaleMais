import { Price } from '../models/Price';
import { Plan } from '../models/Plan';
import { PostalCode } from '../models/PostalCode';

export const postalCodes = [
  new PostalCode({ number: '011' }),
  new PostalCode({ number: '016' }),
  new PostalCode({ number: '017' }),
  new PostalCode({ number: '018' })
];

export const prices = [
  new Price({ sourceCode: postalCodes[0], destinationCode: postalCodes[1], value: 1.9 }),
  new Price({ sourceCode: postalCodes[1], destinationCode: postalCodes[0], value: 2.9 }),
  new Price({ sourceCode: postalCodes[0], destinationCode: postalCodes[2], value: 1.7 }),
  new Price({ sourceCode: postalCodes[2], destinationCode: postalCodes[0], value: 2.7 }),
  new Price({ sourceCode: postalCodes[0], destinationCode: postalCodes[3], value: 0.9 }),
  new Price({ sourceCode: postalCodes[3], destinationCode: postalCodes[0], value: 1.9 })
];

export const plans = [
  new Plan({ brand: 'FaleMais 30', includedMinutes: 30, extraTax: 0.1 }),
  new Plan({ brand: 'FaleMais 60', includedMinutes: 60, extraTax: 0.1 }),
  new Plan({ brand: 'FaleMais 120', includedMinutes: 120, extraTax: 0.1 })
];