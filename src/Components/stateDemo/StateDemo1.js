import React, { Component } from "react";

export default class StateDemo1 extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({ counter : this.state.counter+1 });
    // console.log(this.state.counter);
  };

  decrement = () => {
    this.setState({counter : this.state.counter-1});
    // console.log(this.state.counter);
  };

  render() {
    return (
      <>
        <div className="h2 text-light h5 bg-success p-2">Example Of State in Class Component</div>

        <button className="btn btn-md px-4 ms-3 btn-danger" onClick={this.decrement}>
          -
        </button>

        <span className="h2"> &nbsp; {this.state.counter} &nbsp;</span>

        <button className="btn btn-md px-4 btn-success" onClick={this.increment}>
          +
        </button>
      </>
    );
  }
}
