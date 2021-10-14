import React, { useState } from 'react';
import axios from 'axios';
import { trackPromise } from 'react-promise-tracker';

import { Container } from '../Styles/SearchStyle';
import SearchForm from './SearchForm';
import Repos from './Repositories';
import Spinner from './Spinner';
import NotFound from './NotFound';

const Search = () => {
  const [repos, setRepos] = useState([]);
  const [emptySearch, setEmptySearch] = useState(false);

  const handleResult = result => {
    setRepos(result);
    setEmptySearch(result.length === 0);
  };

  const searchRepos = (keyword) => {
    setRepos([]);

    trackPromise(
      axios
        .get(`https://api.github.com/search/repositories?q=${keyword}+in%3Aname&sort=stars&order=desc`)
        .then(result => handleResult(result.data.items))
        .catch((error) => {
          console.log('we have received an error: ', error);
        }));
  };

  return (
    <Container>
      <SearchForm
        onSubmit={value => searchRepos(value)}
      />
      { emptySearch && (<NotFound />) }
      <Spinner />
      <Repos items={repos} />
    </Container>
  )
}

export default Search;
