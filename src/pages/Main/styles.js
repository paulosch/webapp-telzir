import styled from 'styled-components';
import { Container as C } from 'styled-bootstrap-grid';

import { metrics, typography, colors } from '../../styles';

export const Container = styled(C)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: ${metrics.basePadding * 2}px;
`;

export const Title = styled.h1`
  font-size: ${typography.size.title}px;
  color: ${colors.secondary};
  margin-bottom: ${metrics.baseMargin}px;
  font-weight: bolder;
`;

export const Description = styled.p`
  text-align: center;
`;

export const Separator = styled.span`
  width: 100%;
  height: 1px;
  background: ${colors.ligth};
  margin: ${metrics.baseMargin * 2}px 0;
`;
