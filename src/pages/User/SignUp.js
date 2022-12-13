import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../config';
import styled from 'styled-components';

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const isValid = email.includes('@') && password.length >= 8;

  const navigate = useNavigate();

  const postSignUp = () => {
    fetch(`${API.users}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          alert('Please check your email and password again!');
        }
      })
      .then(result => {
        localStorage.setItem('access_token', result.access_token);
        navigate('/signin');
      });
  };

  return (
    <Wrapper>
      <h1>Sing Up Page</h1>
      <IdInput onChange={handleInput} />
      <PwInput onChange={handleInput} />
      <Btn disabled={!isValid} isValid={isValid} onClick={postSignUp}>
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

const PwInput = styled(IdInput).attrs(props => ({
  type: 'password',
  name: 'password',
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
