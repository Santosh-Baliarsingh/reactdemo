import React, { useEffect,useState } from 'react'

export default function UseEffectFetchData() {

    const [comments , setComment] = useState([]);

    // Here we used useEffect to fetch data from API on page Load
    useEffect(() =>{

        fetchData();

    },[])  // here we've given an empty Array to make sure it'll load one time on page load

    const fetchData = () =>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((response) => response.json())
        .then((data) => {
            setComment ( data);
        });
    }



  return (
    <>
    <div className="bg-dark text-light p-3 text-center h3">UseEffect Example Fetching an API in Functional Component On Page Load</div>

    {/* <button className='btn btn-success ms-2' onClick={fetchData}>Fetch Data</button> */}
    {/* in button we can call the function "fetchData" and fetch the data from API but without button click if we want to fetch data from API on page load then we should use "UseEffect" Hook  */}

        <table className="table table-bordered table-striped">
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </>
  )
}
