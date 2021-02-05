import React, { useEffect, useState } from "react";
import API from "../utils/API";
import CardContainer from "react-bootstrap/CardContainer";
import Row from "react-bootstrap/Row";

function Gallery() {
  const [sort, setSort] = useState("");
  const [users, setUsers] = useState([]);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
    }
  }

  function loadUsers() {
    API.getUsers().then(users => {
          setUsers(users);
      setSort("Name Asc");
        })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1 className="text-center">Company Directory</h1>
      <h3 className="text-center">Click on the column headings to change sort</h3>
      <Row>
      </Row>
    </div>
  );
}

export default Gallery;
