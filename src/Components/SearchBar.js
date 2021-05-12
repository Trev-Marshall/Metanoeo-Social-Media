import React from 'react'
import { useHistory } from 'react-router-dom'

function SearchBar() {
  const history = useHistory();

  const onSearch = (e) => {
    history.push('/searchResults');
    e.preventDefault();
  }

  return (
    <form onSubmit={onSearch}>
      <label htmlFor="header-search">
        <span className="visually-hidden">Search Bar</span>
      </label>
      <input
        type="text"
        id="header-search"
        placeholder="Search..."
        name="s"
      />
    </form>
  )
}

export default SearchBar
