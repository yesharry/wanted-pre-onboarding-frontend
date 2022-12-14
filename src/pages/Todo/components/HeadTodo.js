import React from 'react';
import styled from 'styled-components';

const HeadTodo = () => {
  const logOut = () => {
    localStorage.removeItem('access_token');
    window.location.reload();
  };

  return (
    <HeadWrapper>
      <h1>TODO LIST</h1>
      <Btn onClick={logOut}>로그아웃</Btn>
    </HeadWrapper>
  );
};

const HeadWrapper = styled.div`
  padding-top: 20px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 10px;

  border-bottom: 1px solid #e9ecef;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Btn = styled.button`
  width: 70px;
  height: 30px;
  background-color: #20c997;
  border-radius: 10px;
  border: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #63e6be;
  }
  &:active {
    background-color: #20c997;
  }
`;

export default HeadTodo;
