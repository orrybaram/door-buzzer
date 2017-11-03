import React from 'react';
import buttonClass from './style';

export default ({ onClick, disabled, children }) => (
  <button onClick={onClick} disabled={disabled} className={buttonClass}>
    {children}
  </button>
)