import React, { Component } from "react";

export default class Demo1 extends Component {
  state = {
    name: "Sasuke",
  };

  render() {
    setTimeout(() => {
      this.setState({ name: "Naruto" });

      console.log(this.state.name);
    }, 3000); 

    /*  // Note :-
        Here After 3s the new value is keep rendering before the value was "Sasuke" and after 3s the value change into "Naruto" again again. so this is not a "Pure Component" */


    return (
      <>
        <div className="bg-dark text-light p-3 h3 text-center">
          React Component Example in Class Component
        </div>
        <p className="h2 fw-bold">
          Anime Character Name is{" "}
          <span className="text-success">{this.state.name}</span>
        </p>
      </>
    );
  }
}
