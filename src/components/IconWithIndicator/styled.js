import styled from 'styled-components';
import { FlexContainer } from '../../globalStyles';

export const IndicatorWrapper = styled(FlexContainer)`
  span {
    font-size: ${({ fontSize }) => fontSize || 12}px;
  }
`;
