import React, { Component } from 'react';
import { PriceTable } from '../components/PriceTable';
import { prices } from '../data/data';


export class Prices extends Component {
  state = {
    prices: prices
  };

  render() {
    return (
      <React.Fragment>
        <h1>Tabela de Preços</h1>
        
        <PriceTable prices={this.state.prices} />
      </React.Fragment>
    );
  }
}