import { Price } from '../models/Price';
import { Plan } from '../models/Plan';

export const data = {
  prices: [
    new Price({ sourceCode: '011', destinationCode: '016', value: 1.9 }),
    new Price({ sourceCode: '016', destinationCode: '011', value: 2.9 }),
    new Price({ sourceCode: '011', destinationCode: '017', value: 1.7 }),
    new Price({ sourceCode: '017', destinationCode: '011', value: 2.7 }),
    new Price({ sourceCode: '011', destinationCode: '018', value: 0.9 }),
    new Price({ sourceCode: '018', destinationCode: '011', value: 1.9 })
  ],
  extraTax: 0.1,
  plans: [
    new Plan({ brand: 'FaleMais 30', includedMinutes: 30, extraTax: this.extraTax }),
    new Plan({ brand: 'FaleMais 60', includedMinutes: 60, extraTax: this.extraTax }),
    new Plan({ brand: 'FaleMais 120', includedMinutes: 120, extraTax: this.extraTax }),
  ]
}