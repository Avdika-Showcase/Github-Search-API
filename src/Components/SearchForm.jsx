import React, { useState } from 'react';

import { Input } from '../Styles/SearchFormStyle';
import MyButton from './Button';

const SearchForm = (props) => {
  console.log(props);
  const [value, setValue] = useState('');

  const changeValue = (event) => {
    setValue(event.target.value);
  };

  const submitValue = (event) => {
    event.preventDefault();
    if (value === '') {
      alert('Please enter name');
    } else {
      props.onSubmit(value);
      setValue('');
    }
  };

  return (
    <form>
      <Input
        type="text"
        placeholder={props.placeholder}
        value={value}
        onChange={changeValue}
        autoComplete="off"
      />
      <MyButton
        onClick={event => { submitValue(event) }}
        buttontext={props.buttontext}
      />
    </form>
  )
}

export default SearchForm;
