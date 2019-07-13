import styled from 'styled-components';

import { metrics } from '../../styles';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  padding: ${metrics.basePadding}px 0;
`;
