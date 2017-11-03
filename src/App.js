import React, { Component } from 'react';
import classNames from 'classnames';
import './App.css';

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
    const buttonClass = classNames({
      'button': true,
      'button--active': this.state.isBuzzerPressed,
    });

    const buttonText = this.state.isBuzzerPressed
      ? "Buzzing..."
      : "Unlock Door";

    return (
      <div className="app">
        <div className="main">
          <button
            className={buttonClass}
            onClick={this.onClick}
            disabled={this.state.isBuzzerPressed}
          >
            <div class="loader button__loader" />
            <span>{buttonText}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
