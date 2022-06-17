import React, { Component } from "react";

export default class RefDemo1 extends Component {
  constructor(props) {
    super(props);
    this.myRef1 = React.createRef();
    this.myRef2 = React.createRef();
  }
  add = () => {
    let value_1 = parseInt(this.myRef1.current.value);
    let value_2 = parseInt(this.myRef2.current.value);
    alert(value_1 + value_2);
  };
  render() {
    return (
      <>
        <div className="bg-dark text-light h3 p-3 text-center">
          Template Reference Variabe (Refs) in Class Component
        </div>

        <input
          className="form-control w-25 d-inline mx-2"
          placeholder="Enter First Number"
          name="textbox1"
          ref={this.myRef1}
          type="text"
        />

        <input
          className="form-control w-25 d-inline me-2"
          placeholder="Enter Second Number"
          name="textbox2"
          ref={this.myRef2}
          type="text"
        />

        <button className="btn btn-success " onClick={this.add}>
          Add
        </button>
      </>
    );
  }
}

// In Class Component We have to use "React.createRef()".
