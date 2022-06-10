import React from 'react'

export default function EventsDemo1() {

    const show = () =>{

        alert("Hello Good Morning!");
    };

  return (
    <>
    <div className='h3 bg-dark p-2 text-light text-center'>React Events Example 1 in Function Component</div>

    {/* Example-1 */}
    {/* Here This is Valid if its the plain function we should write like this*/}
    <button className='btn btn-primary mb-3 ms-3' onClick={show}>Click Here</button>

    {/* Example-2 */}
    {/* Here This is Invalid because When we are using onClick={show()} it'll calls the 'Show()' function on page load. */}
    {/* <button className='btn btn-primary' onClick={show()}>Click Here</button> */}
    </>
  )
}
