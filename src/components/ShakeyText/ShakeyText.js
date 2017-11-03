import styled from 'react-emotion';
import { animationShake } from '../../styles';

const animation = ({ active }) => {
  return active
    ? `${animationShake} 150ms ease infinite`
    : 'none';
};

const filter = ({ active }) => {
  return active
    ? `blur(0.65px)`
    : 'none';
};

export default styled.span`
 display: inline-block;
 animation: ${animation};
 filter: ${filter};
`