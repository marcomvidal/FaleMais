import React from 'react';
import { Card } from './Card';
import { helpers } from '../helpers/helpers';

export const SimulationResultCard = ({ result, plan }) => {
  if (result === null) {
    return null;
  }

  const isPlanLessAdvantageous = !result.isPlanMoreAdvantageous() ? 'bg-primary text-white' : null;
  const isPlanMoreAdvantageous = result.isPlanMoreAdvantageous() ? 'bg-primary text-white' : null;

  return (
      <Card header="Resultado da simulação">
        <div className="row">
          <div className="offset-md-2 col-md-4">
            <Card className={isPlanLessAdvantageous}>
              <h5>Minutagem padrão</h5>
              <h3>R$ {helpers.formatMoney('pt-BR', result.withoutPlan)}</h3>
            </Card>
          </div>
          <div className="col-md-4">
            <Card className={isPlanMoreAdvantageous}>
              <h5>{plan.brand}</h5>
              <h3>R$ {helpers.formatMoney('pt-BR', result.withPlan)}</h3>
            </Card>
          </div>
        </div>
      </Card>
    );
}