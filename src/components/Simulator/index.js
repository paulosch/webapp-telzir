import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DropdownList } from 'react-widgets';

import SimulatorActions from '../../store/ducks/simulator';

import {
  Container,
  Description,
  Row,
  Col3,
  ColBadPrice,
  Input,
  ColPlansList,
  Item,
  Error
} from './styles';

const Simulator = () => {
  const dispatch = useDispatch();

  const { plans, error, loading, ddds, pricePerMinute } = useSelector(
    state => state.simulator
  );

  const [minutes, setMinutes] = useState(0);
  const [dddOrigin, setOrigin] = useState();
  const [dddDestiny, setDestiny] = useState();

  useEffect(() => {
    dispatch(SimulatorActions.getRequest());
  }, [dispatch]);

  useEffect(() => {
    if (minutes && dddOrigin && dddDestiny) {
      dispatch(
        SimulatorActions.calculateRequest(minutes, dddOrigin, dddDestiny)
      );
    }
  }, [minutes, dddOrigin, dddDestiny, dispatch]);

  const formatPrice = value => {
    if (value > -1)
      return value.toLocaleString(navigator.language, {
        style: 'currency',
        currency: 'BRL'
      });

    return <span>Sem valor definido</span>;
  };

  return (
    <Container>
      <Description>
        Simule quanto vai economizar com os novos planos FaleMais da{' '}
        <span>Telzir</span>
      </Description>

      {!!error && (
        <Error>
          Houve um erro ao carregar a página, tente novamente mais tarde
        </Error>
      )}

      <Row>
        <Col3>
          DDD de origem
          <DropdownList
            data={ddds.filter(ddd => ddd !== dddDestiny)}
            busy={loading}
            value={dddOrigin}
            onChange={value => setOrigin(value)}
          />
        </Col3>

        <Col3>
          DDD de destino
          <DropdownList
            data={ddds.filter(ddd => ddd !== dddOrigin)}
            busy={loading}
            value={dddDestiny}
            onChange={value => setDestiny(value)}
          />
        </Col3>

        <Col3>
          Minutos
          <Input
            type="number"
            min="0"
            max="10000"
            step={10}
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
          />
        </Col3>
      </Row>

      <Row>
        <ColPlansList>
          <ul>
            {plans.map(plan => (
              <Item key={plan.id}>
                <span>Plano {plan.name}</span>
                <strong>{formatPrice(plan.price)}</strong>
              </Item>
            ))}
          </ul>
        </ColPlansList>

        <ColBadPrice>
          Valor sem plano
          <span>{formatPrice(pricePerMinute * minutes)}</span>
        </ColBadPrice>
      </Row>
    </Container>
  );
};

export default Simulator;
