import React, { Component } from 'react';
import { areaCodes, plans } from '../data/data';
import { Card } from '../components/Card';
import { InputContainer } from '../components/InputContainer';
import { SimulationResult } from '../models/SimulationResult';
import { SimulationResultCard } from '../components/SimulationResultCard';
import { Simulation } from '../models/Simulation';

export class Calculator extends Component {
  state = {
    codes: areaCodes,
    plans: plans,
    source: areaCodes[0],
    destination: areaCodes[1],
    callTime: 1,
    selectedPlan: plans[0],
    result: null
  };

  handleSource = event => this.setState({ source: this.state.codes[event.target.value] });
  
  handleDestination = event => this.setState({ destination: this.state.codes[event.target.value] });

  handleCallTime = event => this.setState({ callTime: event.target.value });

  handlePlan = event => this.setState({ selectedPlan: this.state.plans[event.target.value] });

  handleSubmit = event => {
    event.preventDefault();
    const simulation = new Simulation(this.state.selectedPlan, this.state.callTime);
    this.setState({ result: simulation.generate() });
  }

  codesOptions() {
    return this.state.codes.map(code => <option key={code.id} value={code.id}>{code.number}</option>);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Calculadora</h1>

        <Card header="Simulação">
          <form className="row" onSubmit={this.handleSubmit}>
            <InputContainer label="DDD de origem:" className="col-md-3">
              <select className="form-control" value={this.state.source.id} onChange={this.handleSource}>
                {this.codesOptions()}
              </select>
            </InputContainer>
            <InputContainer label="DDD de destino:" className="col-md-3">
              <select className="form-control" value={this.state.destination.id} onChange={this.handleDestination}>
                {this.codesOptions()}
              </select>
            </InputContainer>
            <InputContainer label="Minutos de ligação:" className="col-md-3">
              <input className="form-control" type="number" value={this.state.callTime} onChange={this.handleCallTime} />
            </InputContainer>
            <InputContainer label="Plano" className="col-md-3">
              <select className="form-control" value={this.state.selectedPlan.id} onChange={this.handlePlan}>
                {this.state.plans.map(plan => <option key={plan.id} value={plan.id}>{plan.brand}</option>)}
              </select>
            </InputContainer>

            <button type="submit" className="btn btn-primary offset-md-5 col-md-2">Simular</button>
          </form>
        </Card>

        <SimulationResultCard result={this.state.result} plan={this.state.selectedPlan} />
      </React.Fragment>
    );
  }
}