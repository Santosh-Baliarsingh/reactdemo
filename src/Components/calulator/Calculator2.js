import React, { Component } from "react";

export default class Calculator2 extends Component {
  state = {
    num1: 0,
    num2: 0,
    total: 0,
  };

  changeHandler1 = (e) => {
    this.setState({ num1: +e.target.value });
  };

  changeHandler2 = (e) => {
    this.setState({ num2: +e.target.value });
  };

  addition = () =>{

    this.setState({total : this.state.num1 + this.state.num2})

  };

  render() {
    return (
      <>
        <div  className="ms-3 text-primary h3 ">Simple Calculator Using Class Component</div>
        <input type="number" className="form-control w-25 d-inline m-3" onChange={this.changeHandler1} />
        <input type="number" className="form-control w-25 d-inline " onChange={this.changeHandler2} />
        <button className="btn btn-success ms-3" onClick={this.addition} >Click Here</button>
        <h3 className="text-danger m-3">Total Value is {this.state.total}</h3>
      </>
    );
  }
}
