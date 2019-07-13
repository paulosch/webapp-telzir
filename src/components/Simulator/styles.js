import styled from 'styled-components';
import { Container as C, Col, Row as R } from 'styled-bootstrap-grid';

import { metrics, typography, colors } from '../../styles';

export const Container = styled(C)``;

export const Description = styled.p`
  margin-bottom: ${metrics.baseMargin}px;
  font-weight: bold;
  color: ${colors.primary};
`;

export const Row = styled(R)``;

export const ColDDD = styled(Col).attrs({
  col: 12,
  md: 6
})``;

export const Table = styled.table`
  width: 100%;
  text-align: left;
  margin-top: 20px;

  thead th {
    font-size: ${typography.size.tableTitle}px;
    color: ${colors.regular};
    letter-spacing: ${typography.space.letter}px;
    font-weight: normal;
    padding: 5px 10px;
  }

  tbody td {
    border-top: 1px solid ${colors.dark};
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;
  }
`;

export const Item = styled.tr`
  td {
    border-top: 1px solid ${colors.ligth};
    font-size: 13px;
    padding: 0 10px;
    line-height: 40px;
    background: ${colors.ligth};
    color: #1ed760;

    &:nth-child(3) {
      font-weight: bold;
      font-size: 14px;
    }

    &:last-child {
      color: ${colors.danger};
    }
  }

  &:hover td {
    background: ${colors.lighter};
  }
`;
