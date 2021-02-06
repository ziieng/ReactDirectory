import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header"

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
      <Header />
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th className="align-middle text-center">Image</th>
                <th className="align-middle text-center">Name</th>
                <th className="align-middle text-center">Email</th>
                <th className="align-middle text-center">Phone</th>
                <th className="align-middle text-center">Birthday</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td><img src={user.image} alt={"Photo of " + user.name}></img></td>
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
