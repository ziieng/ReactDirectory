import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import Sorter from "../utils/Sort"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar"
import ColTitle from "../components/ColTitle"
import TableBody from "../components/TableBody"

function Gallery() {
  const [sort, setSort] = useState("");
  //user list to filter/sort
  const [users, setUsers] = useState([]);
  //user list to go back to after a filter is gone (check if needed once filter is working)
  const [userList, setUserList] = useState([]);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  function updateSort(tag) {
    // Get the title of the clicked button
    const btnName = tag;
    let toSort = users
    let longList = userList
    switch (btnName) {
      case "Name":
        if (sort === "Name Asc") {
          setUsers(Sorter.Desc(toSort, "name"))
          setUserList(Sorter.Desc(longList, "name"))
          setSort("Name Desc")
        } else {
          setUsers(Sorter.Asc(toSort, "name"))
          setUserList(Sorter.Asc(longList, "name"))
          setSort("Name Asc")
        }
        break;

      case "Email":
        if (sort === "Email Asc") {
          setUsers(Sorter.Desc(toSort, "email"))
          setUserList(Sorter.Desc(longList, "email"))
          setSort("Email Desc")
        } else {
          setUsers(Sorter.Asc(toSort, "email"))
          setUserList(Sorter.Asc(longList, "email"))
          setSort("Email Asc")
        }
        break;

      case "Phone":
        if (sort === "Phone Asc") {
          setUsers(Sorter.Desc(toSort, "phone"))
          setUserList(Sorter.Desc(longList, "phone"))
          setSort("Phone Desc")
        } else {
          setUsers(Sorter.Asc(toSort, "phone"))
          setUserList(Sorter.Asc(longList, "phone"))
          setSort("Phone Asc")
        }
        break;

      case "Birthday":
        if (sort === "Birthday Asc") {
          setUsers(Sorter.Month(toSort, "desc"))
          setUserList(Sorter.Month(longList, "desc"))
          setSort("Birthday Desc")
        } else {
          setUsers(Sorter.Month(toSort, "asc"))
          setUserList(Sorter.Month(longList, "asc"))
          setSort("Birthday Asc")
        }
        break;

      default:
        break;
    }
  }

  function loadUsers() {
    API.getUsers().then(users => {
      setUsers(users);
      setUserList(users);
    })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Header />
      <div className="container-fluid">
        <Row>
          <Col>
            <SearchBar setUsers={setUsers} userList={userList} />
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
