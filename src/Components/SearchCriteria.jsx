import React from 'react'

import MyButton from './Button';
import { SearchCriteriaMenu } from '../Styles/searchCriteriaMenuStyled';

const SearchCriteria = () => {
  return (
    <SearchCriteriaMenu>
      <MyButton buttontext='Code'></MyButton>
      <MyButton buttontext='Commits'></MyButton>
      <MyButton buttontext='Issues and pull requests'></MyButton>
      <MyButton buttontext='Labels'></MyButton>
      <MyButton buttontext='Repositories'></MyButton>
      <MyButton buttontext='Topics'></MyButton>
      <MyButton buttontext='Users'></MyButton>
    </SearchCriteriaMenu>
  )
}

export default SearchCriteria;
