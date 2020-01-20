import styled from 'styled-components';
import { mainBlackColor, mainTextColor } from '../../globalStyles';

export const ContentWrapper = styled.div`
  padding: 100px 120px;
  padding-bottom: 160px;
  height: auto;
  @media (max-width: 768px) {
    padding: 80px 60px;
    padding-bottom: 140px;
  }
  @media (max-width: 480px) {
    padding: 70px 20px;
    padding-bottom: 80px;
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: 0.3px;
  margin: 0;
  color: ${mainBlackColor};
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: ${mainTextColor};
  width: 60%;
  margin-bottom: 40px;
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
