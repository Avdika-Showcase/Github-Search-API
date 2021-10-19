import React, { useContext } from 'react'

import { helpText } from '../Helpers/constants';
import { WorkingAreaContext } from '../Contexts';

const HelpText = () => {
  const { criteria } = useContext(WorkingAreaContext);

  return (
    <p>{helpText[criteria]}</p>
  )
}

export default HelpText;
