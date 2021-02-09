import React from "react"

function SearchBar(props) {
  function handleSearch(event) {
    let term = event.target.value
    let results = props.userList.filter(employee =>
      employee.name.toLowerCase().indexOf(term.toLowerCase()) !== -1
      ||
      employee.email.toLowerCase().indexOf(term.toLowerCase()) !== -1
      ||
      employee.phone.indexOf(term) !== -1)
    if (results.length > 0) {
      props.setUsers(results)
    } else {
      props.setUsers("none")
    }
  }

  return <div className="content-center">
    <form className="form-inline my-2">
      <input
        className="form-control"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="search"
        onChange={handleSearch}
      />
    </form>
  </div>
}

export default SearchBar