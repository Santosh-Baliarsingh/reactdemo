import React, { PureComponent } from "react";

export default class Demo1 extends PureComponent {
  state = {
    name: "Sasuke",
  };

  render() {
      console.log(this.state.name);
    setTimeout(() => {
        this.setState({ name: "Naruto" });
    }, 3000);

    /*  // Note :-
          Here after Changing the class  to PureComponent state Value will render one time after value got changed after 3s" */

    return (
      <>
        <div className="bg-dark text-light p-3 h3 text-center">
          React PureComponent Example in Class Component
        </div>
        <p className="h2 fw-bold">
          Anime Character Name is{" "}
          <span className="text-success">{this.state.name}</span>
        </p>
      </>
    );
  }
}
