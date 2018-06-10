import React, { Component } from 'react';
import Counter from './counter';

class App extends Component {
  state = {
    count: 0
  };

  increment = value => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  reset = () => {
    this.setState({
      count: 0
    });
  };

  render() {
    return (
      <div className="container">
        <div>
          <h1 className="text-center">Counter App</h1>
        </div>
        <Counter
          count={this.state.count}
          increment={this.increment}
          decrement={this.decrement}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
