import React from "react";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Products</th>
        <th>Description</th>
        <th>Price</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.user_id}>
            <td>{user.name}</td>
            <td>{user.products}</td>
            <td>{user.description}</td>
            <td>{user.price}</td>
            <td>{user.location}</td>
            <td>{user.category}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>{" "}
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
