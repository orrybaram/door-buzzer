import { css, keyframes } from 'emotion';

export const primaryColor = '#77bce6';

export const Root = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

export const Main = css`
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
