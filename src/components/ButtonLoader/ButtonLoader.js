import React from 'react';
import classNames from 'classnames';
import styles from './ButtonLoader.css';

const ButtonLoader = ({
  active
}) => {
  const buttonLoaderClass = classNames({
    [styles.buttonLoader]: true,
    [styles.buttonLoaderActive]: active,
  });

  return <div className={buttonLoaderClass} />
};

export default ButtonLoader;