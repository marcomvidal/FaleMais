import React from 'react';
import { Card } from './Card';
import { helpers } from '../helpers/helpers';

export const SimulationResultCard = ({ result, isPossible }) => {
  if (result === null) {
    return null;
  }

  const isPlanLessAdvantageous = !result.isPlanMoreAdvantageous() ? 'bg-primary text-white' : null;
  const isPlanMoreAdvantageous = result.isPlanMoreAdvantageous() ? 'bg-primary text-white' : null;

  return isPossible === false ?
    <Card header="Resultado">
      Não há um plano FaleMais com os códigos de área selecionados.
    </Card>
    :
    (
    <Card header="Resultado">
      <div className="row">
        <div className="offset-md-2 col-md-4 text-center">
          <Card className={isPlanLessAdvantageous}>
            <h5>Minutagem padrão</h5>
            <h3>R$ {helpers.formatMoney('pt-BR', result.withoutPlan)}</h3>
          </Card>
        </div>
        <div className="col-md-4 text-center">
          <Card className={isPlanMoreAdvantageous}>
            <h5>{result.plan.brand}</h5>
            <h3>R$ {helpers.formatMoney('pt-BR', result.withPlan)}</h3>
          </Card>
        </div>
      </div>
    </Card>
    );
}