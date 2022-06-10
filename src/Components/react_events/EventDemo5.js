import React, { Component } from "react";

export default class EventDemo5 extends Component {
  state = {
    num1: 0,
    num2: 0,
    total: 0,
  };

  addition = () => {
    this.setState({ total: this.state.num1 + this.state.num2 });
  };

  changeHandler = (e) => {

   /*  const {name , value} = e.target;

    this.setState({ [name]: +value }); */ //This is Valid

    this.setState({[e.target.name] : +e.target.value});
  };
  render() {
    return (
      <>
        <div className="h3 bg-dark p-2 text-light text-center">
          React onChange Event (Single Event Handler for multiple input elements) in Class Component
        </div>
        <div className="ms-3">
          <input
            className="form-control w-25 mb-2"
            name="num1"
            onChange={this.changeHandler}
          />
          <input
            className="form-control w-25 mb-2"
            name="num2"
            onChange={this.changeHandler}
          />
          <button className="btn btn-info w-25 fw-bold" onClick={this.addition}>
            Click To Add
          </button>
          <p className="text-danger h4">Addition is {this.state.total}</p>
        </div>
      </>
    );
  }
}
