import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header"
import ColTitle from "../components/ColTitle"
import Sorts from "../utils/Sort"

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
    console.log(btnName)
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
      <Header />
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th scope="col" className="align-middle text-center">Image</th>
                <ColTitle label="Name" updateSort={updateSort} />
                <ColTitle label="Email" updateSort={updateSort} />
                <ColTitle label="Phone" updateSort={updateSort} />
                <ColTitle label="Birthday" updateSort={updateSort} />
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td className="align-middle text-center"><img src={user.image} alt={"Photo of " + user.name}></img></td>
                  <td className="align-middle text-center">{user.name}</td>
                  <td className="align-middle text-center">{user.email}</td>
                  <td className="align-middle text-center">{user.phone}</td>
                  <td className="align-middle text-center">{user.bday}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}

export default Gallery;
