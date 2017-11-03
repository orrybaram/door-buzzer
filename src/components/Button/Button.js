import React from 'react';
import styles from './Button.css';
const noop = () => {};

const Button = ({
  onClick = noop,
  disabled,
  children
}) => (
  <button
    className={styles.button}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;