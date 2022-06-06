import React from "react";
import users from "./users.json";

export default function ArrayDemo3() {

  return (
    <>
      <h2 className="text-center fw-bold text-light bg-dark p-2">
        ArrayDemo3 (User List From JSON File)
      </h2>
      <div className="container-fluid table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr className="text-center">
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>WebSite</th>
            <th>Company Name</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr className="text-center" key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}
