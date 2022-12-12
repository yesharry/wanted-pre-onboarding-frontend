import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    pw: '',
    nick: '',
  });

  const { email, pw } = inputs;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const isValid = email.includes('@') && pw.length >= 8;

  return (
    <Wrapper>
      <h1>Sing Up Page</h1>
      <IdInput onChange={handleInput} />
      <NickInput onChange={handleInput} />
      <PwInput onChange={handleInput} />
      <Btn disabled={!isValid} isValid={isValid}>
        회원가입
      </Btn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const IdInput = styled.input.attrs(props => ({
  type: 'text',
  name: 'email',
  placeholder: '이메일',
}))`
  width: 250px;
  height: 35px;
`;

const NickInput = styled(IdInput).attrs(props => ({
  type: 'text',
  name: 'nick',
  placeholder: '닉네임',
}))``;

const PwInput = styled(IdInput).attrs(props => ({
  type: 'password',
  name: 'pw',
  placeholder: '비밀번호',
}))``;

const Btn = styled.button`
  width: 258px;
  height: 40px;
  background-color: ${({ isValid }) => (isValid ? 'tomato' : 'gray')};
  color: white;
  border: none;
  border-radius: 5px;
`;

export default SignUp;
