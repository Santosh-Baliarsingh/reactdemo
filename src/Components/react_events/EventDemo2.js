import React from 'react'

export default function EventDemo2() {

    const sum = (a,b) =>{
        
        alert(a+b);
    }
  return (
    <>
    <div className='h3'>React Events Example 2</div>

    {/* If It's taking Arguments then We should write like this */}
    <button className='btn btn-danger' onClick={() =>{sum(5,5)}}>CLick Here To Add</button>
    </>
  )
}
