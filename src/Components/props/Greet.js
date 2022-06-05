import React from "react";
import PropTypes from 'prop-types';

//This is Child Component (Props)
export default function Greet({name,msg = 'Default Message',children,flag}) {

 /*  if(!props.msg){

    alert("Message is not There..!");
  } */
  return (
    <>
      <div>
          Hello {name} , {msg} <br/>
          {children} <br/>
          {(flag ? <h1>Hello</h1> : null)}
      </div>

      {/* <ul>
        {props.cars.map((car,ind) =>(
          <li key={ind}>{car}</li>
        ))}
      </ul> */}
    </> 
  );
}

Greet.propTypes = {

  name:PropTypes.string,
  msg:PropTypes.string,
  children:PropTypes.element
  // msg:PropTypes.string.isRequired,
  // cars :PropTypes.array,
};
