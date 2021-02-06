import React from "react";
import "./style.css";

function Header(props) {
  return <div className="jumbotron-fluid header mb-3 mx-0">
    <h1 className="text-center">Company Directory</h1>
    <h3 className="text-center">Click on the column headings to change sort</h3>
  </div>
}

export default Header;