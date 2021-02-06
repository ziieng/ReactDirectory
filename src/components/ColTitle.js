import React from "react";

function Button(props) {
  let label = props.label
  let sort = props.sortState.split(" ")
  let buttonClasses = "btn btn-sm btn-outline-info shadow-none"
  let iconStatus = "fas fa-sort"

  if (sort[0] !== label) {
    buttonClasses = buttonClasses + " disabled"
  } else {
    if (sort[1] === "Asc") {
      iconStatus = iconStatus + "-up"
    } else {
      iconStatus = iconStatus + "-down"
    }
  }

  return <th scope="col" className="align-middle text-center">{label} <button className={buttonClasses} onClick={() => props.updateSort(label)}><i className={iconStatus}></i></button></th>
}

export default Button;
