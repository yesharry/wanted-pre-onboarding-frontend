import React, { useState } from 'react';
import styled from 'styled-components';

const SignIn = () => {
  const [inputs, setInputs] = useState({
    id: '',
    pw: '',
  });

  const { id, pw } = inputs;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const isValid = id.includes('@') && pw.length >= 8;

  return (
    <Wrapper>
      <IdInput onChange={handleInput} />
      <PwInput onChange={handleInput} />
      <Btn disabled={!isValid}>로그인</Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IdInput = styled.input.attrs(props => ({
  type: 'text',
  name: 'id',
  placeholder: '이메일',
}))`
  width: 250px;
  height: 30px;
`;

const PwInput = styled(IdInput).attrs(props => ({
  type: 'password',
  name: 'pw',
  placeholder: '비밀번호',
}))``;

const Btn = styled.button``;

export default SignIn;
