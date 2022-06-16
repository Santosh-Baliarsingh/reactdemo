import React, { Component } from "react";

export default class ComponentDidMount extends Component {

     //constructor() Method
     constructor(props){
        super(props);
        this.state = {
            color : "red",
        };
        console.log("Constructor");
        // document.getElementById('para').style.color = this.state.color;
        //Here we'll get an error because by the time constructor is getting called the elements are not yet mounted (DOM elements are not yet ready) so it wont be able to change the color
    };

    //static getDerivedStateFromProps(props,state) Method
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps");
        return { color: props.color };
    }

    // componentDidMount() Method
    componentDidMount (){
        document.getElementById('para').style.color = this.state.color;
         console.log("componentDidMount");
         //This is the best palce to manipulate the DOM
    }

  render() {
    return (
      <>
        <div className="bg-dark text-light text-center h4 p-3">Example Of ComponentDidMount Method in Class Component</div>
        <p className="h3" id='para'>Hello World - {this.state.color}</p>
      </>
    );
  }
}
