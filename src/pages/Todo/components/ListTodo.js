import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemTodo from './ItemTodo';
import styled from 'styled-components';

const ListTodo = ({ todoList, accessToken, setTodoList }) => {
  // todoList 안에는 id, todo, isCompleted, userId 가 담겨있다.
  // accessToken 안에는 토큰 정보가 담겨있다.

  return (
    <ListWrapper>
      {todoList?.map(todoList => (
        <ItemTodo
          key={todoList.id}
          todoList={todoList}
          accessToken={accessToken}
          setTodoList={setTodoList}
        />
        // todoList와 accessToke을 맵을 돌린 아이템 컴포넌트로 보내준다
      ))}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

export default ListTodo;
