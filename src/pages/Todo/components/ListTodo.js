import React from 'react';
import ItemTodo from './ItemTodo';
import styled from 'styled-components';

const ListTodo = ({ todoList, accessToken, setTodoList }) => {
  return (
    <ListWrapper>
      {todoList?.map(todoList => (
        <ItemTodo
          key={todoList.id}
          todoList={todoList}
          accessToken={accessToken}
          setTodoList={setTodoList}
        />
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
