import styled from 'styled-components';
import {
  mainWhiteColor,
  FlexContainer,
  primaryColor
} from '../../globalStyles';

export const FooterWrapper = styled(FlexContainer)`
  position: fixed;
  z-index: 10000;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 65px;
  border-top: 1px solid #eaeaea;
  background: ${mainWhiteColor};
  @media (max-width: 768px) {
    height: 60px;
  }
  @media (max-width: 480px) {
    height: 55px;
  }
`;

export const StyledButton = styled(FlexContainer)`
  width: 32px;
  height: 32px;
  background: ${primaryColor};
  border-radius: 6px;
  cursor: pointer;
`;
