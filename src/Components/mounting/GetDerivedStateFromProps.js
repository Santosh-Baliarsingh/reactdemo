import React, { Component } from "react";

export default class GetDerivedStateFromProps extends Component {
  //constructor() Method
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
    console.log("Constructor");
  }

  //static getDerivedStateFromProps(props,state) Method
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return { color: props.color }; // Here we are updating the state data from 'red' to 'blue' if nothing is coming from props then it'll be 'red' Only
  }

  render() {
    return (
      <>
        <div className="bg-dark text-light p-3 h4 text-center">
          GetDerivedStateFromProps Example in Class Component
        </div>
        <p className="h4">Color is - {this.state.color}</p>
      </>
    );
  }
}
