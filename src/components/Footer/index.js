import React from 'react';
import { ToolsWrapper, ImgButton, ToolsBlock } from '../../globalStyles';
import { FooterWrapper, StyledButton } from './styled';
import plus from '../../assets/plus.png';
import search from '../../assets/search.png';
import grid from '../../assets/grid.png';
import bell from '../../assets/bell.png';
import IconWithIndicator from '../IconWithIndicator';

const Footer = () => (
  <FooterWrapper>
    <ToolsWrapper justifyContent="space-between">
      <ToolsBlock>
        <div>
          <ImgButton src={search} alt="search" />
        </div>
        <div>
          <ImgButton src={grid} alt="grid" />
        </div>
        <div>
          <IconWithIndicator fontSize={14} image={bell} alt="bell" count={1} />
        </div>
      </ToolsBlock>
      <StyledButton>
        <ImgButton src={plus} alt="plus" />
      </StyledButton>
    </ToolsWrapper>
  </FooterWrapper>
);

export default Footer;
