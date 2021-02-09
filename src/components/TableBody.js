import React from "react";

const TableBody = (props) => {
  if (props.users) {
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
    return <tbody>
      <th scope="row" className="align-middle text-center">"No employees found."</th>
    </tbody>
  }
}

export default TableBody