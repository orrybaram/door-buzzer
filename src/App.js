import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.css';

const SLEEP_TIME = 5000;

class App extends Component {
  state = {
    isBuzzerPressed: false,
  }

  onClick = () => {
    this.setState({
      isBuzzerPressed: true,
    });

    setTimeout(() => {
      this.setState({
        isBuzzerPressed: false,
      });
    }, SLEEP_TIME)
  }

  render() {
    const buttonLoaderClass = classNames({
      [styles.buttonLoader]: true,
      [styles.buttonLoaderActive]: this.state.isBuzzerPressed,
    });

    const buttonText = this.state.isBuzzerPressed
      ? "Buzzing..."
      : "Unlock Door";

    return (
      <div className={styles.app}>
        <div className={styles.main}>
          <button
            className={styles.button}
            onClick={this.onClick}
            disabled={this.state.isBuzzerPressed}
          >
            <div className={buttonLoaderClass} />
            <span>{buttonText}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
