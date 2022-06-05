import React from "react";
import Greet from "./Greet";

// This is Parent Component
export default function PropsParent() {
  return (
    <>
    <div>
      <Greet name='Naruto'  >
      <>
        <h4>Hello World</h4>
        <h4>Hello World</h4>
        <h4>Hello World</h4>
      </>
      </Greet>
      <Greet name='Asta' msg='Good AfterNoon' flag={true}></Greet>
      <Greet name='Sasuke' msg='Good Evening' flag={false}></Greet>
      <Greet name='Yuno' msg='Good Night' flag></Greet>
      <Greet name='Yami' flag></Greet>

      {/* <Greet name='Naruto' msg={6} cars={['audi','bmw']}></Greet>
      <Greet name='Asta' msg='Good AfterNoon' cars={['audi','bmw']}></Greet>
      <Greet name='Sasuke' msg='Good Evening' cars={['audi','bmw']}></Greet>
      <Greet name='Yuno' msg='Good Night' cars={['audi','bmw']}></Greet> */}
    </div>
    </>
  );
}
