import React from 'react';
import { helpers } from '../helpers/helpers';

export const PriceTable = ({ prices }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th scope="col">Origem</th>
        <th scope="col">Destino</th>
        <th scope="col">R$ por minuto</th>
      </tr>
    </thead>
    <tbody>
      {prices.map(price =>
        <tr key={price.id}>
          <td>{price.sourceCode.number}</td>
          <td>{price.destinationCode.number}</td>
          <td>R$ {helpers.formatMoney('pt-BR', price.value)}</td>
        </tr>
      )}
    </tbody>
  </table>
);