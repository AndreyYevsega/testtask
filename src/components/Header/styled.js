import styled from 'styled-components';
import { mainWhiteColor, FlexContainer } from '../../globalStyles';

export const HeaderWrapper = styled(FlexContainer)`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background: ${mainWhiteColor};
  @media (max-width: 768px) {
    height: 60px;
  }
  @media (max-width: 480px) {
    height: 55px;
  }
`;
