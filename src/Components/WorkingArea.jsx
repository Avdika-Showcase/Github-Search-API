import React from 'react'

import SearchCriteria from './SearchCriteria';
import SearchForm from './SearchForm';
import HelpText from './HelpText';

const WorkingArea = () => {
  return (
    <div>
      <SearchCriteria />
      <HelpText />
      <SearchForm
      placeholder="Enter Repository Name"
      buttontext="Search"
      />
    </div>
  )
}

export default WorkingArea;
