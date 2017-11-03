import { css } from 'emotion';
import styled from 'react-emotion';
import { animationRotate360 } from '../../styles';

const Loader = css`
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 4px solid rgba(255, 255, 255, 0.2);
  border-right: 4px solid rgba(255, 255, 255, 0.2);
  border-bottom: 4px solid rgba(255, 255, 255, 0.2);
  border-left: 4px solid #ffffff;
  transform: translateZ(0);
  animation: ${animationRotate360} 1.1s infinite linear;
  border-radius: 50%;
  width: 20px;
  height: 20px;

  &:after {
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }
`;

export default styled.div`
  ${Loader}
  float: left;
  position: absolute;
  left: ${props => props.active ? '15px' : '-50px'};
  top: 10px;
  transition: all .2s;
`;