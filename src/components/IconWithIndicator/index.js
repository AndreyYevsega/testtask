import React from 'react';
import { IndicatorWrapper } from './styled';
import { ImgButton } from '../../globalStyles';

const IconWithIndicator = ({ count, image, alt, fontSize }) => (
  <IndicatorWrapper fontSize={fontSize}>
    <ImgButton src={image} alt={alt} />
    <span>{count}</span>
  </IndicatorWrapper>
);

export default IconWithIndicator;
