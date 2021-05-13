import React from 'react'
import { InstantSearch } from 'react-instantsearch-core';
import { SearchBox, Hits } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  '34SNGEK7ZA',
  '811b1cb914c6dff45f876c5381af8cbf'
);

function SearchBar() {
  return (
    <>
      <InstantSearch
        indexName="metanoeo_profiles"
        searchClient={searchClient}
      >
        <SearchBox />
        {/* <Hits /> */}
      </InstantSearch>
    </>
  )
}

export default SearchBar
