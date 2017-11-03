import React, { Component } from 'react';
import classNames from 'classnames';
import { Root, Main, Button, ButtonLoader } from './styles';

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
      <Root>
        <Main>
          <Button
            className={buttonClass}
            onClick={this.onClick}
            disabled={this.state.isBuzzerPressed}
          >
            <ButtonLoader active={this.state.isBuzzerPressed} />
            <span>{buttonText}</span>
          </Button>
        </Main>
      </Root>
    );
  }
}

export default App;
