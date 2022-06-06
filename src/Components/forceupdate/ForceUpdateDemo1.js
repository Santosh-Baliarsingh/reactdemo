import React, { Component } from "react";

export default class ForceUpdateDemo1 extends Component {
  cars = ["BMW", "Mercedes", "Ferrari", "Audi", "Rolls-Royace"]; // class Variable not a state Variable

  addNewCar = () => {
    this.cars.push("Aston-martin");
    console.log(this.cars);
    this.forceUpdate(); // we shouldn't use this forceUpdate. we should maintain the data in State not class.
  };

  render() {
    console.log("Render Called");
    return (
      <>
        <div>ForceUpdate Example</div>
        <ul>
          {this.cars.map((car, id) => (
            <li key={id}>
              {id}---{car}
            </li>
          ))}
        </ul>
        <button onClick={this.addNewCar}>Update Cars</button>
      </>
    );
  }
}
