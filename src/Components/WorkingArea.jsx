import React, { useContext } from 'react'

import SearchCriteria from './SearchCriteria';
import SearchForm from './SearchForm';
import HelpText from './HelpText';
import { WorkingAreaContext } from '../Contexts';

const WorkingArea = () => {
  const {criteria} = useContext(WorkingAreaContext);

  return (
    <div>
      <SearchCriteria />
      <HelpText />
      <SearchForm
      placeholder={`Enter ${criteria} Name`}
      buttontext="Search"
      />
    </div>
  )
}

export default WorkingArea;
