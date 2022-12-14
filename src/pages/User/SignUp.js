import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import API from '../../config';
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

  const postSignUp = async () => {
    await axios({
      method: 'POST',
      url: 'https://pre-onboarding-selection-task.shop/auth/signup',
      header: { 'Content-Type': 'application/json' },
      data: {
        email: email,
        password: password,
      },
    })
      .then(res => {
        alert('회원가입이 완료되었습니다.');
        navigate('/');
      })
      .catch(err => {
        alert(err.res.data.message);
      });
  };

  return (
    <Wrapper>
      <SignBox>
        <Head>
          <h1>Sing Up Page</h1>
        </Head>
        <Container>
          <IdInput onChange={handleInput} />
          <PwInput onChange={handleInput} />
          <Btn disabled={!isValid} isValid={isValid} onClick={postSignUp}>
            회원가입
          </Btn>
        </Container>
      </SignBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignBox = styled.div`
  width: 350px;
  height: 350px;
  position: relative;

  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  /* margin-top: 96px;
margin-bottom: 32px; */
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  color: #20c997;
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;

  border-bottom: 1px solid #e9ecef;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  height: 170px;

  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const IdInput = styled.input.attrs(props => ({
  type: 'text',
  name: 'email',
  placeholder: '이메일',
}))`
  width: 250px;
  height: 35px;
  outline: none;
`;

const PwInput = styled(IdInput).attrs(props => ({
  type: 'password',
  name: 'password',
  placeholder: '비밀번호',
}))``;

const Btn = styled.button`
  width: 258px;
  height: 40px;
  background-color: ${({ isValid }) => (isValid ? '#38d9a9' : 'lightgray')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default SignUp;
