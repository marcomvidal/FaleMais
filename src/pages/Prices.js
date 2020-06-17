import React, { Component } from 'react';
import { PriceTable } from '../components/PriceTable';
import { prices } from '../data/data';
import { Jumbotron } from '../components/Jumbotron';

export class Prices extends Component {
  state = {
    prices: prices
  };

  componentDidMount() {
    document.title = 'Aramo - Tarifas';
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron
          title="Bem vindo à Aramo!"
          subtitle="Chamadas de longa distância a preços competitivos.">
            <p>
              Temos planos que cabem no seu bolso. Você pode contratá-los por minuto, conforme a tabela abaixo.
            </p>
            <p>
              No entanto, quase sempre um pacote é mais vantajoso. Pensando em você, oferecemos uma calculadora
              para que possa fazer simulações e decidir pelo plano mais vantajoso.
            </p>
            <p className="lead">
              <a className="btn btn-primary btn-lg" href="/calculadora" role="button">Simule!</a>
            </p>
          </Jumbotron>
        
        <h2 className="my-3">Tabela de preços</h2>
        <PriceTable prices={this.state.prices} />
      </React.Fragment>
    );
  }
}