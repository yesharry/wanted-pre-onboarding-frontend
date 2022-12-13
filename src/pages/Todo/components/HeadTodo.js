import React from 'react';
import styled from 'styled-components';

const HeadTodo = () => {
  return (
    <HeadWrapper>
      <h1>TODO LIST (0)</h1>
      <span>로그아웃</span>
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

  span {
    width: 70px;
    height: 30px;
    background-color: #20c997;
    border-radius: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export default HeadTodo;
