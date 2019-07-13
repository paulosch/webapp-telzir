import React from 'react';
import { DropdownList } from 'react-widgets';

import { Container, Description, Row, ColDDD, Table, Item } from './styles';

const DDDs = ['011', '016', '017', '018'];

const Simulator = () => (
  <Container>
    <Description>
      Simule quanto vai economizar com os novos planos FaleMais da{' '}
      <span>Telzir</span>
    </Description>

    <Row>
      <ColDDD>
        DDD de origem
        <DropdownList data={DDDs} />
      </ColDDD>

      <ColDDD>
        DDD de destino
        <DropdownList data={DDDs} />
      </ColDDD>
    </Row>

    <Row>
      <Table>
        <thead>
          <tr>
            <th>Tempo</th>
            <th>Plano</th>
            <th>Com FaleMais</th>
            <th>Sem FaleMais</th>
          </tr>
        </thead>
        <tbody>
          <Item>
            <td>20 minutos</td>
            <td>FaleMais 30</td>
            <td>R$ 50,00</td>
            <td>R$ 100,00</td>
          </Item>
        </tbody>
      </Table>
    </Row>
  </Container>
);

export default Simulator;
