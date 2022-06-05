import React, { Component } from "react";

export default class StateDemo4 extends Component {
  state = {
    counter: 0,
  };

  incrementCountFiveTimes() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  increment() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    return (
      <>
        <div className="h4 text-light  bg-success p-2">
          Updating The Count 5 Times
        </div>

        <span className="h2"> &nbsp; {this.state.counter} &nbsp;</span>

        <button
          className="btn btn-md px-4 ms-3 btn-danger"
          onClick={() => this.incrementCountFiveTimes()}
        >
          +
        </button>
      </>
    );
  }
}
