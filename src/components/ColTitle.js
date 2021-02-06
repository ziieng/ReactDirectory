import React from "react";

function Button(props) {
  let updateSort = props.updateSort
  return <th scope="col" className="align-middle text-center">{props.label} <button className="btn btn-sm btn-outline-secondary shadow-none disabled" onClick={() => updateSort(props.label)}><i className="fas fa-sort"></i></button></th>
}

export default Button;
