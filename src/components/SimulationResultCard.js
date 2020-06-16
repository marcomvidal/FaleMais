import React from 'react';
import { Card } from './Card';
import { helpers } from '../helpers/helpers';

export const SimulationResultCard = ({ result, plan }) => {
  return result == null ? 
    null :
    (
      <Card header="Resultado da simulação">
        <div className="row">
          <div className="offset-md-3 col-md-3">
            <Card>
              <h5>Minutagem padrão</h5>
              <h3>R$ {helpers.formatMoney('pt-BR', result.withoutPlan)}</h3>
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <h5>{plan.brand}</h5>
              <h3>R$ {helpers.formatMoney('pt-BR', result.withPlan)}</h3>
            </Card>
          </div>
        </div>
      </Card>
    );
}