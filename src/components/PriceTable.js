import React from 'react';

export const PriceTable = (props) => (
  <table class="table table-hover">
    <thead>
      <tr>
        <th scope="col">Origem</th>
        <th scope="col">Destino</th>
        <th scope="col">R$ por minuto</th>
      </tr>
    </thead>
    <tbody>
      {props.prices.map(price =>
        <tr>
          <td>{price.sourceCode}</td>
          <td>{price.destinationCode}</td>
          <td>R$ {price.formattedValue()}</td>
        </tr>
      )}
    </tbody>
  </table>
);