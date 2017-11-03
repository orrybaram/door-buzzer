import React, { Component } from 'react';
import './App.css';

const SLEEP_TIME = 5000;

class App extends Component {
  state = {
    isLightOn: false,
  }

  onClick = () => {
    this.setState({
      isLightOn: true,
    });

    setTimeout(() => {
      this.setState({
        isLightOn: false,
      });
    }, SLEEP_TIME)
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClick}>Click Me</button>
        <div>{`${this.state.isLightOn}`}</div>
      </div>
    );
  }
}

export default App;
