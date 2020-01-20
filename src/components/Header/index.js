import React from 'react';
import { ToolsWrapper, ImgButton, ToolsBlock } from '../../globalStyles';
import { HeaderWrapper } from './styled';
import backArrow from '../../assets/backArrow.png';
import dropdown from '../../assets/dropdown.png';
import addUser from '../../assets/addUser.png';
import share from '../../assets/share.png';
import subMenu from '../../assets/subMenu.png';

const Header = () => (
  <HeaderWrapper>
    <ToolsWrapper justifyContent="space-between">
      <ImgButton src={backArrow} alt="back" />

      <ToolsBlock>
        <div>
          <ImgButton src={dropdown} alt="dropdown" />
        </div>
        <div>
          <ImgButton src={addUser} alt="addUser" />
        </div>
        <div>
          <ImgButton src={share} alt="share" />
        </div>
        <div>
          <ImgButton src={subMenu} alt="subMenu" />
        </div>
      </ToolsBlock>
    </ToolsWrapper>
  </HeaderWrapper>
);

export default Header;
