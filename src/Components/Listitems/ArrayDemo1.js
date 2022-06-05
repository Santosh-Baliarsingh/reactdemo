import React from 'react'

export default function ArrayDemo1() {

    const cars = ['BMW',"Mercedes","Ferrari","Audi","Aston-Martin"];

  return (
      <>
    <h2 className='text-center fw-bold text-light bg-dark p-2 '>ArrayDemo1</h2>
    <ul>
        {cars.map((car,ind) =>(

            <li key={ind}>{ind}--{car}</li>
        ))}
    </ul>

      </>
  )
}
