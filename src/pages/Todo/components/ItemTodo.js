import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { HiPencil } from 'react-icons/hi';

const ItemTodo = ({ todoList, accessToken, setTodoList }) => {
  const checkTodo = id => async () => {
    await axios({
      method: 'PUT',
      url: `https://pre-onboarding-selection-task.shop/todos/${id}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        todo: todoList.todo,
        isCompleted: !todoList.isCompleted,
      },
    })
      .then(res => {
        window.location.reload('/todo');
      })
      .catch(err => {
        alert(err.res.data.message);
      });
  };

  const deleteTodo = id => async () => {
    await axios({
      method: 'DELETE',
      url: `https://pre-onboarding-selection-task.shop/todos/${id}`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(res => {
        alert('삭제되었습니다.');
        window.location.reload('/todo');
      })
      .catch(err => {
        alert(err.res.data.message);
      });
  };
  return (
    <Wrapper>
      {todoList && (
        <ItemWrapper>
          <CheckCircle
            isCompleted={todoList.isCompleted}
            onClick={checkTodo(todoList.id)}
          >
            {todoList.isCompleted && <MdDone />}
          </CheckCircle>
          <Text isCompleted={todoList.isCompleted}>{todoList.todo}</Text>
          <Edit>
            <HiPencil />
          </Edit>
          <Remove onClick={deleteTodo(todoList.id)}>
            <MdDelete />
          </Remove>
        </ItemWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  display: none;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
    ${Edit} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.isCompleted &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.isCompleted &&
    css`
      color: #ced4da;
    `}
`;

export default ItemTodo;
