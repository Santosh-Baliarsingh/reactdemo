import React, { Component } from "react";

export default class EventDemo3 extends Component {
  state = {
    name: "Santosh",
  };

  displayMsg = () => {
    console.log(this.state.name);
  };
  render() {
    return (
      <>
        <div className="h3 bg-dark p-2 text-light text-center">
          React Event in Class Components
        </div>
        <button className="btn btn-primary mb-3 ms-3" onClick={this.displayMsg}>
          Click Here
        </button>
      </>
    );
  }
}
