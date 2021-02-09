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

  return <form className="mb-3 px-2 ml-md-3">
    <div className="form-group row">
      <label for="search" className="col-md-2">Search to filter list:</label> 
      <input
        className="form-control col-md-9"
        type="search"
        placeholder="Search"
        aria-label="Search"
        name="search"
        onChange={handleSearch}
      />
    </div>
  </form>
}

export default SearchBar