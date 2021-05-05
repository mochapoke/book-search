import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BiX, BiSearch } from 'react-icons/bi';

import { fetchBooks } from '../actions/book.actions';
import { InputContainer, InputBox, Button } from './Input.styles';

interface Props {
  placeholder?: string;
}

const Input: React.FC<Props> = ({ placeholder }) => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBooks(query));
  }, [query]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const submit = (event: any) => {
    event.preventDefault();
    dispatch(fetchBooks(query));
  };
  const cancel = () => {
    setQuery('');
  };

  return (
    <form onSubmit={submit}>
      <InputContainer>
        <Button onClick={submit}>
          <BiSearch />
        </Button>
        <InputBox
          placeholder={placeholder}
          type='text'
          value={query}
          onChange={onChange}
        />
        <Button onClick={cancel}>
          <BiX />
        </Button>
      </InputContainer>
    </form>
  );
};

export default Input;
