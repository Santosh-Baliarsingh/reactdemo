import React, { Component } from "react";

export default class Assignment1 extends Component {

    state = {

        show : true,
    }

    show = () =>{

        this.setState({show : true})
    }
    hide = () =>{

        this.setState({show : false})
    }
  
  render() {
    return (
      <>
      <div className="text-center h3 bg-dark text-light p-3">Show and Hide a Div In Class Component Using State</div>
      <div className=" text-center">
        <button onClick={this.show} className="btn btn-success  px-4 py-2 mt-4 me-5"> Show
        </button>
        <button onClick={this.hide} className="btn btn-danger  px-4 py-2 mt-4 "> 
        Hide
        </button>

      </div>
       {
           this.state.show ? 
        <p className="w-50  border fw-bold border-primary border-3 mx-auto mt-4 p-2">
          Lorem Ipsum is a simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum
        </p> : null
       }
      </>
    );
  }
}
