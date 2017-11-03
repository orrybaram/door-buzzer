import React, { Component } from 'react';
import { Root, Main } from './styles';
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
      <div className={Root}>
        <main className={Main}>
          <Button
            onClick={this.onClick}
            disabled={this.state.isBuzzerPressed}
          >
            <ButtonLoader active={this.state.isBuzzerPressed} />
            <span>{buttonText}</span>
          </Button>
        </main>
      </div>
    );
  }
}

export default App;
