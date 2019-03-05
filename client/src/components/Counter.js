import React, { Component } from "react";
import { renderToJson } from "enzyme-to-json";

class Counter extends Component {
  state = {
    count: 0
  };

  increment = () =>
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });

  render() {
    return (
      <div>
        <p>current count : {this.state.count}</p>
        <button onCLick={this.increment}>increment count</button>
      </div>
    );
  }
}

export default Counter;
