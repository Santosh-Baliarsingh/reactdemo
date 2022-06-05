import React, { Component } from "react";

export default class StateDemo3 extends Component {
  state = {
    counter: 0,
  };

  increment = () => {
    this.setState({ counter: this.state.counter + 1 },() =>{

        // To get the same state change in both UI and Console We ahve to Write a call back function(arrow Function) means After update the state we are getting the data in both UI and Console. 
        console.log(`Updated Value is ${this.state.counter}`);
    });

    // console.log("Updated Value is " , this.state.counter); //Here we are getting one value less than the Value Showing on UI in state Changing
};

  decrement = () => {
    this.setState({ counter: this.state.counter - 1 } , () =>{

        console.log(`Updated Value is ${this.state.counter}`);
    });
    
    // console.log("Updated Value is " , this.state.counter); //Here we are getting one value less than the Value Showing on UI in state Changing
  };
  render() {
    return (
      <>
        <div className="h4 text-light  bg-success p-2">
        After Updating The State Then Show the Data in both UI in Class Component
        </div>

        <button
          className="btn btn-md px-4 ms-3 btn-danger"
          onClick={this.decrement}
        >
          -
        </button>

        <span className="h2"> &nbsp; {this.state.counter} &nbsp;</span>

        <button
          className="btn btn-md px-4 btn-success"
          onClick={this.increment}
        >
          +
        </button>
      </>
    );
  }
}
