import React, { Component } from "react";

export default class ComponentDidMountAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
    };

    console.log("Constructor");
  }
  componentDidMount() {
    console.log("ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ comments: data });
      });
  }
  render() {
    return (
      <>
        <div className="bg-dark text-light p-3 text-center">ComponentDidMount Example Fetching an API in Class Component</div>
        <table className="table table-bordered table-striped">
          <tbody>
            {this.state.comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

// Note :- 
/* -if we are going to fetch any data from an API then API call should be placed in this lifecycle method,and then we get the response, we can call the setState() method and render the element with updated data.

-good place for DOM manipulation. */


