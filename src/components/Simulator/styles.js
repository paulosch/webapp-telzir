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

export const Col3 = styled(Col).attrs({
  col: 12,
  md: 4
})``;

export const Input = styled.input`
  width: 100%;
  background-color: ${colors.white};
  border: #ccc 1px solid;
  border-radius: ${metrics.baseRadius}px;
  padding: 11px;
`;

export const ColPlansList = styled(Col).attrs({
  col: 12,
  md: 8
})`
  ul {
    margin: ${metrics.baseMargin * 2}px 0;
    list-style: none;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${metrics.baseMargin}px;
  font-size: ${typography.size.title / 2}px;
  border-bottom: 1px solid ${colors.ligth};

  span {
    color: ${colors.secondary};
  }

  strong {
    color: ${colors.primary};
  }
`;

export const ColBadPrice = styled(Col).attrs({
  col: 12,
  md: 4
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${metrics.basePadding}px 0;

  span {
    color: ${colors.danger};
    font-weight: bold;
    text-align: center;
  }
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${metrics.basePadding}px;
  margin-bottom: ${metrics.baseMargin}px;
  background: ${colors.danger};
  color: ${colors.white};
  border-radius: ${metrics.baseRadius}px;
`;
