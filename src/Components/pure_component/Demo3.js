import React, { useState } from 'react'

export default function Demo3() {

    const [name , setName] = useState("Yuno");

    setTimeout(() => {
        setName("Asta")
    }, 3000);

    console.log(name);

    // Functional Component is Already PureComponent so no need to use PureComponent in  Class Component

  return (
    <>
      <div className="bg-dark text-light p-3 h3 text-center">
          React PureComponent Example in functional Component
        </div>
        <p className="h2 fw-bold">
          Anime Character Name is{" "}
          <span className="text-success">{name}</span>
        </p>

    </>
  )
}
