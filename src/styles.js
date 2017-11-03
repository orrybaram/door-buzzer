import styled, { keyframes } from 'styled-components';

const primaryColor = '#77bce6';

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

export const Button = styled.button`
  background: ${primaryColor};
  border-bottom: 3px solid #6d92c1;
  border-radius: 4px;
  box-shadow: 0 2px 5px #0000002e;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 15px 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;

  &:hover {
    background: #6eadd3;
  }

  &:active {
    background: #6097b8;
    box-shadow: none;
    border: 0;
    top: 3px;
    margin-bottom: 4px;
  }

  &:disabled {
    background: #88a6b7;
    color: #ffffff59;
    border-bottom: 3px solid #7d8793;
  }
`;

export const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 4px solid rgba(255, 255, 255, 0.2);
  border-right: 4px solid rgba(255, 255, 255, 0.2);
  border-bottom: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid #ffffff;
  transform: translateZ(0);
  animation: ${rotate360} 1.1s infinite linear;
  border-radius: 50%;
  width: 20px;
  height: 20px;

  &:after {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
`;

export const ButtonLoader = Loader.extend`
  float: left;
  position: absolute;
  left: ${props => props.active ? '15px' : '-50px'};
  top: 10px;
  transition: all .2s;
`;