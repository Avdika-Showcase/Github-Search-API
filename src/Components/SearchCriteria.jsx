import React from 'react'

import MyButton from './Button';
import { SearchCriteriaMenu } from '../Styles/searchCriteriaMenuStyled';
import { searchCriteriaBtnText } from '../Helpers/constants';

const SearchCriteria = () => {
  return (
    <SearchCriteriaMenu>
      {searchCriteriaBtnText.map(item => (
        <MyButton
          key={Date.now() + searchCriteriaBtnText.indexOf(item)}
          buttontext={item}
        />
      ))}
    </SearchCriteriaMenu>
  )
}

export default SearchCriteria;
