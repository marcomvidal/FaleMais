import React, { Component } from 'react';
import { areaCodes, plans, prices } from '../data/data';
import { Card } from '../components/Card';
import { InputContainer } from '../components/InputContainer';
import { SimulationResultCard } from '../components/SimulationResultCard';
import { Simulation } from '../models/Simulation';

export class Calculator extends Component {
  state = {
    source: areaCodes[0],
    destination: areaCodes[1],
    plan: plans[0],
    callTime: 10,
    result: null,
    isSimulationPossible: true
  };

  componentDidMount() {
    document.title = 'Aramo - Calculadora FaleMais';
  }

  handleSource = event => this.setState(
    { source: areaCodes.find(code => code.id === Number(event.target.value)) }
  );

  handleDestination = event => this.setState(
    { destination: areaCodes.find(code => code.id === Number(event.target.value)) }
  );

  handleCallTime = event => this.setState({ callTime: event.target.value });

  handlePlan = event => this.setState(
    { plan: plans.find(plan => plan.id === Number(event.target.value)) }
  );

  handleSubmit = event => {
    event.preventDefault();
    
    const price = prices.find(price =>
      price.sourceCode === this.state.source &&
      price.destinationCode === this.state.destination);

    if (price === undefined) {
      this.setState({ isSimulationPossible: false });
      return;
    }

    const simulation = new Simulation({
      callTime: this.state.callTime,
      plan: this.state.plan,
      price: price
    });

    this.setState({
      result: simulation.generate(),
      isSimulationPossible: true
    });
  }

  render() {
    return (
      <React.Fragment>
        <Card header="Simulação">
          <form className="row" onSubmit={this.handleSubmit}>
            <InputContainer label="DDD de origem:" className="col-md-3">
              <select
                className="form-control"
                value={this.state.source.id}
                onChange={this.handleSource}>
                {areaCodes.map(code => <option key={code.id} value={code.id}>{code.number}</option>)}
              </select>
            </InputContainer>
            <InputContainer label="DDD de destino:" className="col-md-3">
              <select
                className="form-control"
                value={this.state.destination.id}
                onChange={this.handleDestination}>
                {areaCodes.map(code => <option key={code.id} value={code.id}>{code.number}</option>)}
              </select>
            </InputContainer>
            <InputContainer label="Minutos de ligação:" className="col-md-3">
              <input className="form-control" type="number" value={this.state.callTime} onChange={this.handleCallTime} />
            </InputContainer>
            <InputContainer label="Plano" className="col-md-3">
              <select
                className="form-control"
                value={this.state.plan.id}
                onChange={this.handlePlan}>
                {plans.map(plan => <option key={plan.id} value={plan.id}>{plan.brand}</option>)}
              </select>
            </InputContainer>

            <button type="submit" className="btn btn-primary offset-md-5 col-md-2 mt-3">Simular</button>
          </form>
        </Card>

        <div className="mt-3">
          <SimulationResultCard
            result={this.state.result}
            isPossible={this.state.isSimulationPossible} />
        </div>
        
      </React.Fragment>
    );
  }
}