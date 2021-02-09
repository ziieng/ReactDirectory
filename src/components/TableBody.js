import React from "react";

const TableBody = (props) => {
  if (props.users !== "none") {
  return <tbody>
    {props.users.map((user, i) => (
      <tr key={i}>
        <td className="align-middle text-center"><img src={user.image} alt={"Photo of " + user.name}></img></td>
        <th scope="row" className="align-middle text-center">{user.name}</th>
        <td className="align-middle text-center">{user.email}</td>
        <td className="align-middle text-center">{user.phone}</td>
        <td className="align-middle text-center">{user.bday}</td>
      </tr>
    ))}
    </tbody>
  }
  else {
    return <tbody><td colspan="5" className="text-center">No employees found with that search.
    </td></tbody>
  }
}

export default TableBody