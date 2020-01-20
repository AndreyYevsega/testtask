import styled from 'styled-components';

export const primaryColor = '#4A00CD';
export const secondaryColor = '#F5F6F7';
export const mainWhiteColor = '#ffffff';
export const mainTextColor = '#656974';
export const mainBlackColor = '#000000';
export const hashTagBackground = 'rgba(86,86,86,0.1)';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
`;

export const SecondaryText = styled.p`
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.3px;
`;

export const ToolsWrapper = styled(FlexContainer)`
  width: 100%;
  height: 100%;
  padding: 0 24px;
`;

export const ImgButton = styled.img`
  cursor: pointer;
`;

export const ToolsBlock = styled(FlexContainer)`
  span {
    margin-left: 4px;
  }
  div:not(:last-child) {
    margin-right: 36px;
  }
`;

export const HashTag = styled.span`
  background: ${hashTagBackground};
  mix-blend-mode: normal;
  border-radius: 6px;
  font-size: 13px;
  line-height: 18px;
  padding: 4px;
  letter-spacing: 0.35px;
  color: ${mainTextColor};
`;
