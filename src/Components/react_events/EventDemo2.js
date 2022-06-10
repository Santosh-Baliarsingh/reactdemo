import React from 'react'

export default function EventDemo2() {

    const sum = (a,b) =>{
        
        alert(a+b);
    }
  return (
    <>
    <div className='h3 bg-dark p-2 text-light text-center'>React Events Example 2 in Function Component</div>

    {/* If It's taking Arguments then We should write like this */}
    <button className='btn btn-danger mb-3 ms-3' onClick={() =>{sum(5,5)}}>CLick Here To Add</button>
    </>
  )
}
