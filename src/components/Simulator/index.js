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

  const { plans, prices, error, loading } = useSelector(
    state => state.simulator
  );

  const [minutes, setMinutes] = useState(1);
  const [dddOrigin, setOrigin] = useState();
  const [dddDestiny, setDestiny] = useState();

  useEffect(() => {
    dispatch(SimulatorActions.getRequest());
  }, [dispatch]);

  const getListOfDdds = origin => {
    let ddds = prices.map(price => (origin ? price.origin : price.destiny));
    ddds = [...new Set(ddds)];

    if (origin) {
      return ddds.filter(ddd => ddd !== dddDestiny).sort();
    }

    return ddds.filter(ddd => ddd !== dddOrigin).sort();
  };

  const calculatePriceWithPlan = plan => {
    if (minutes <= plan.minutes) {
      return 0.0;
    }

    let normalPrice = calculatePriceWithOutPlan(minutes - plan.minutes);
    const additionalPrice = normalPrice * plan.pc_addition;

    return normalPrice + additionalPrice;
  };

  const calculatePriceWithOutPlan = (minutesQty, formated = false) => {
    const price = prices.find(
      price => price.origin === dddOrigin && price.destiny === dddDestiny
    );

    if (!price) {
      return <span>Não há informações para os ddd's informados</span>;
    }

    if (formated) {
      return formatPrice(minutesQty * price.price);
    }

    return minutesQty * price.price;
  };

  const formatPrice = value => {
    return value.toLocaleString(navigator.language, {
      style: 'currency',
      currency: 'BRL'
    });
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
            data={getListOfDdds(true)}
            busy={loading}
            value={dddOrigin}
            onChange={value => setOrigin(value)}
          />
        </Col3>

        <Col3>
          DDD de destino
          <DropdownList
            data={getListOfDdds(false)}
            busy={loading}
            value={dddDestiny}
            onChange={value => setDestiny(value)}
          />
        </Col3>

        <Col3>
          Minutos
          <Input
            type="number"
            min="1"
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
                <strong>{formatPrice(calculatePriceWithPlan(plan))}</strong>
              </Item>
            ))}
          </ul>
        </ColPlansList>

        <ColBadPrice>
          Valor sem plano
          <span>{calculatePriceWithOutPlan(minutes, true)}</span>
        </ColBadPrice>
      </Row>
    </Container>
  );
};

export default Simulator;
