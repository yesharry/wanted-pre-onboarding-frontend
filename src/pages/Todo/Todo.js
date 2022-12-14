import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateTodo from './components/CreateTodo';
import HeadTodo from './components/HeadTodo';
import ListTodo from './components/ListTodo';
import styled from 'styled-components';

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    setAccessToken(access_token);

    const getTodo = async () => {
      await axios({
        method: 'GET',
        url: 'https://pre-onboarding-selection-task.shop/todos',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then(res => {
          setTodoList(res.data);
        })
        .catch(err => {
          console.log(err.res.data.message);
        });
    };
    getTodo();
  }, []);

  return (
    <Wrapper>
      <TodoBox>
        <HeadTodo todoList={todoList} />
        <ListTodo
          todoList={todoList}
          setTodoList={setTodoList}
          accessToken={accessToken}
        />
        <CreateTodo accessToken={accessToken} />
      </TodoBox>
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

const TodoBox = styled.div`
  width: 412px;
  height: 668px;
  position: relative;

  background-color: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;
`;

export default Todo;
