import React, { Component } from "react";

export default class EventDemo4 extends Component {
  state = {
    num1: 0,
    num2: 0,
    total: 0,
  };

  addition = () => {
    this.setState({ total: this.state.num1 + this.state.num2 });
  };

  changeHandler1 = (e) => {
    this.setState({ num1: +e.target.value });
  };

  changeHandler2 = (e) => {
    this.setState({ num2: +e.target.value });
  };

  render() {
    return (
      <>
        <div className="h3 bg-dark p-2 text-light text-center">
          React Event in onChange in Class Component with two onChange Events
        </div>
        <div className="ms-3">
          <input
            className="form-control w-25 mb-2"
            onChange={this.changeHandler1}
          />
          <input
            className="form-control w-25 mb-2"
            onChange={this.changeHandler2}
          />
          <button className="btn btn-info w-25 fw-bold" onClick={this.addition}>
            Click To Add
          </button>
          <p className="text-success h4">Addition is {this.state.total}</p>
        </div>
      </>
    );
  }
}
