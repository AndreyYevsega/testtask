import styled from 'styled-components';
import {
  secondaryColor,
  FlexContainer,
  mainBlackColor,
  mainTextColor
} from '../../globalStyles';

export const CardWrapper = styled.div`
  width: 100%;
  height: auto;
  box-sizing: content-box;
  border-radius: 10px;
  background: ${secondaryColor};
`;

export const MainImage = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const CardFooter = styled.div`
  height: 65px;
  padding: 10px 15px;
`;

export const Text = styled.h2`
  font-weight: 500;
  font-size: 15px;
  margin: 0;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 24px;
  letter-spacing: 0.3px;
  color: ${mainBlackColor};
`;

export const Author = styled(FlexContainer)`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin-right: 8px;
  }
  p {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.3px;
    color: ${mainTextColor};
  }
`;

export const Options = styled(FlexContainer)`
  margin-left: 4px;
  *:not(:last-child) {
    margin-right: 6px;
  }
`;
