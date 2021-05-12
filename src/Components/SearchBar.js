import React from 'react'
import { InstantSearch } from 'react-instantsearch-core';
import { SearchBox, Hits } from 'react-instantsearch-dom';
import { useHistory } from 'react-router-dom';

import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch('34SNGEK7ZA', '811b1cb914c6dff45f876c5381af8cbf');
const index = client.initIndex('metanoeo_profiles');

const searchClient = algoliasearch(
  '34SNGEK7ZA',
  '811b1cb914c6dff45f876c5381af8cbf'
);

function SearchBar() {
  const history = useHistory();

  const onSearch = (e) => {
    history.push('/searchResults');
    e.preventDefault();
  }

  return (
    <>
      <InstantSearch
        indexName="metanoeo_profiles"
        searchClient={searchClient}
      >
        <SearchBox />
        <Hits />
      </InstantSearch>
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
    </>
  )
}

export default SearchBar
