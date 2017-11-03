import styled from 'react-emotion';
import { primaryColor } from '../../styles';

export default styled.button`
  background: ${primaryColor};
  border: 0;
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