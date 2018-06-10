import React, { Component } from 'react';

class Counter extends Component {
  render() {
    let { count, increment, decrement, reset } = this.props;
    return (
      <div>
        <div>
          <h2 className="text-center">Counter : {count}</h2>
        </div>
        <br />
        <hr />
        <br />
        <div className="mbtn">
          <div>
            <button className="btn btn-danger" onClick={increment}>
              Increment
            </button>
          </div>
          <div>
            <button className="btn btn-danger" onClick={decrement}>
              Decrement
            </button>
          </div>
          <div>
            <button className="btn btn-danger" onClick={reset}>
              Reset
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Counter;
