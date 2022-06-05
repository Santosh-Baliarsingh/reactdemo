import React, { useState } from 'react'

export default function Assignment4() {

    let [hide,setToggle] = useState(true);

    let changeFlag = () =>{

        setToggle(!hide);
    }
  return (
    <>
        <input type={hide ? 'Password' : 'text'}/>
        <button onClick={changeFlag}>{hide ? 'Show Password' : 'Hide Password'}</button>
    </>
  )
}
