import React, { Component } from "react";

export default class ConstructorDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
    console.log("Constructor");
    this.setState({ color: "blue" });
  }

  render() {
    return (
      <>
        <div className="bg-dark text-light p-3 text-center">
          This is Life Cycle Hook Constructor Example in Class Component
        </div>
        <h3>Color is {this.state.color}</h3>
        <p className="h5 text-danger">
          setState() method should not be called in the constructor().We will
          get the console error like "Can't call setState on a component that is
          not yet mounted".
        </p>
      </>
    );
  }
}
