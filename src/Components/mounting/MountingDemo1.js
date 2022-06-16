import React, { Component } from 'react'

export default class MountingDemo1 extends Component {

  //constructor() Method
    constructor(props){
        super(props);
        this.state = {
            color : "red",
        };
        console.log("Constructor");
        // this.setState({'color': 'blue'});
    };

    //static getDerivedStateFromProps(props,state) Method
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps");
        return null;
    }

    //componentDidMount() Method
    componentDidMount (){
        document.getElementById('div1').style.color = this.state.color;
         console.log("componentDidMount");
    }
    
  //render() Method
  render() {
      console.log("Render");
    return (
      <div id='div1'>MountingDemo1</div>
    )
  }
}

//These Above Four Method will automatically called when a component get loaded. because these are life cycle methods.
//The sequence doesn't matter wherever you write but it'll be called this way
 /* Constructor()
 getDerivedStateFromProps()
 Render()
 componentDidMount() */
