import React , {useRef} from "react";

export default function CallBackRefDemo() {

    let myRef1 = useRef();
    let myRef2 = useRef();
  
    const add = () => {
      let value_1 = parseInt(myRef1.value);
      let value_2 = parseInt(myRef2.value);
      alert(value_1 + value_2);
    };
  
  return (
    <>
      <div className="bg-dark text-light h3 p-3 text-center">Example Of CallBackRef In Functional Component</div>

      <input
        className="form-control w-25 d-inline mx-2"
        placeholder="Enter First Number"
        name="textbox1"
        ref={(x) =>(myRef1 = x)} // Here X is current Input Box
        type="text"
      />

      <input
        className="form-control w-25 d-inline me-2"
        placeholder="Enter Second Number"
        name="textbox2"
        ref={(y) => (myRef2 = y)} // Here X is current Input Box
        type="text"
      />

      <button className="btn btn-success " onClick={add}>
        Add
      </button>
    </>
  );
}
