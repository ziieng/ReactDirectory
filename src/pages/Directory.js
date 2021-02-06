import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import Sorter from "../utils/Sort"
import Header from "../components/Header"
import ColTitle from "../components/ColTitle"
import TableBody from "../components/TableBody"

function Gallery() {
  const [sort, setSort] = useState("");
  const [users, setUsers] = useState([]);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function updateSort(tag) {
    // Get the title of the clicked button
    const btnName = tag;
    console.log("click happened")
    let toSort = users
    switch (btnName) {
      case "Name":
        if (sort === "Name Asc") {
          console.log("Name Asc")
          setUsers(Sorter.Desc(toSort, "name"))
          setSort("Name Desc")
        } else {
          console.log("Name new")
          let sorted = Sorter.Asc(toSort, "name")
          setUsers(sorted)
          setSort("Name Asc")
        }
        break;

      case "Email":

        break;

      case "Phone":

        break;

      case "Birthday":

        break;

      default:
        break;
    }
  }

  function loadUsers() {
    API.getUsers().then(users => {
      setUsers(users);
    })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Header />
      <div className="container-fluid">
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col" className="align-middle text-center">Image</th>
                  <ColTitle label="Name" updateSort={updateSort} sortState={sort} />
                  <ColTitle label="Email" updateSort={updateSort} sortState={sort} />
                  <ColTitle label="Phone" updateSort={updateSort} sortState={sort} />
                  <ColTitle label="Birthday" updateSort={updateSort} sortState={sort} />
              </tr>
            </thead>
              <TableBody users={users} />
          </Table>
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default Gallery;
