import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg) }
  50% { transform: rotate(180deg) }
  100% { transform: rotate(360deg) }
`;

export const LoaderContent = styled.div`
  animation: ${rotateAnimation} 1s linear infinite;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  box-shadow: 0 4px 0 0 #656974;
  transform-origin: 50% calc(50% + 2px);
  box-sizing: content-box;
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: #ffffff;
  @media (max-width: 768px) {
    height: 140px;
  }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0;
`;
