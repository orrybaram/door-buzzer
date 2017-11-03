import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './App.css';
import Button from './components/Button';
import ButtonLoader from './components/ButtonLoader';

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
    const buttonText = this.state.isBuzzerPressed
      ? "Buzzing..."
      : "Unlock Door";

    return (
      <div className={styles.app}>
        <div className={styles.main}>
          <Button
            className={styles.button}
            onClick={this.onClick}
            disabled={this.state.isBuzzerPressed}
          >
            <ButtonLoader active={this.state.isBuzzerPressed} />
            <span>{buttonText}</span>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
