import React from 'react';
import styled from 'styled-components';
import { UpperWrapper } from '../../../Components/SideWrapper';
import Input from '../../../Components/Input';

const InputWrapper = styled.div`
  display: flex;
  margin-right: 2rem;
`;

const Title = () => {
  return (
    <UpperWrapper>
      <InputWrapper>
        <Input placeholder='책 검색' />
      </InputWrapper>
    </UpperWrapper>
  );
};

export default Title;
