import styled from 'react-emotion';
import { keyframes } from 'emotion';

export const primaryColor = '#77bce6';

export const Root = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const Main = styled.main`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
