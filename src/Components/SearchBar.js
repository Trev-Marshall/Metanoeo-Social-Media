import React from 'react'
import { InstantSearch } from 'react-instantsearch-core';
import { SearchBox, Hits, Configure, connectStateResults } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';
import styled from 'styled-components'

const searchClient = algoliasearch(
  '34SNGEK7ZA',
  '811b1cb914c6dff45f876c5381af8cbf'
);

function SearchBar() {
  const Results = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? (
      <Hits hitComponent={Hit} />
    ) : (
      <></>
    )
  );


  const Hit = ({ hit }) => (
    <Container>
      <UserImage src={hit.photo} />
      <Username>{hit.username}</Username>
      <Followers>Followers: {hit.followers}</Followers>
      <FollowBtn>Follow</FollowBtn>
    </Container>
  )

  return (
    <>
      <InstantSearch
        indexName="metanoeo_profiles"
        searchClient={searchClient}
      >
        <SearchBox />
        <Configure hitsPerPage={5} />
        <Results />

      </InstantSearch>
    </>
  )
}

export default SearchBar

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Username = styled.p`
  font-weight: bold;
  margin: 0;
`

const UserImage = styled.img`

`

const Followers = styled.p`
  margin: 0 10px 0 auto;
`

const FollowBtn = styled.button`
  margin: 0 15px 0 0;
`