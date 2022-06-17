import React, { useState } from 'react'
import UseEffectDemoChild from './UseEffectDemoChild'


export default function UseEffectDemoParent() {

    const [flag , setFlag] = useState(true);
  return (
    <>
      <div className="bg-dark text-light p-3 text-center h3">Example Of UseEffect UnMount In Functional Component</div>
      
      {flag ? <UseEffectDemoChild></UseEffectDemoChild> : null }

      <button className='btn btn-info ' onClick={() => {setFlag(!flag)}}>Toggle</button>
     
    </>
  )
}
