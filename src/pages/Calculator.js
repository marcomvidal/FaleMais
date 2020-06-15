import React, { Component } from 'react';
import { postalCodes, plans } from '../data/data';

export class Calculator extends Component {
  state = {
    postalCodes: postalCodes,
    plans: plans
  };

  postalCodesSelection() {
    return (
      <select className="form-control">
        {this.state.postalCodes.map(postalCode => <option>{postalCode.number}</option>)}
      </select>
    );
  }

  plansSelection() {
    return (
      <select className="form-control">
        {this.state.plans.map(plan => <option>{plan.brand}</option>)}
      </select>
    );
  }

  render() {
    return (
      <React.Fragment>
        <h1>Calculadora</h1>

        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-3">
                <label>DDD de origem:</label>
                {this.postalCodesSelection()}
              </div>
              <div className="col-md-3">
                <label>DDD de destino:</label>
                {this.postalCodesSelection()}
              </div>
              <div className="col-md-3">
                <label>Tempo da ligação:</label>
                <input className="form-control" type="number"></input>
              </div>
              <div className="col-md-3">
                <label>Plano:</label>
                {this.plansSelection()}
              </div>
            </div>
          </div>
        
          
        </div>
      </React.Fragment>
    );
  }
}