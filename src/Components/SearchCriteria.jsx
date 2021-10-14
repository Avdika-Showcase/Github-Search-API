import React, { useContext } from 'react'

import MyButton from './Button';
import { SearchCriteriaMenu } from '../Styles/searchCriteriaMenuStyled';
import { searchCriteriaBtnText } from '../Helpers/constants';
import { WorkingAreaContext } from '../Contexts';

const SearchCriteria = () => {
const { setCriteria } = useContext(WorkingAreaContext);

  const handleClick = (e) => {
    setCriteria(e);
  }

  return (
    <SearchCriteriaMenu>
      {searchCriteriaBtnText.map(item => (
        <MyButton
          key={Date.now() + searchCriteriaBtnText.indexOf(item)}
          buttontext={item}
          title={item.split(' ')[0]}
          onClick={() => handleClick(item.split(' ')[0])}
        />
      ))}
    </SearchCriteriaMenu>
  )
}

export default SearchCriteria;
