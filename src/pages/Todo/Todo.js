import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CreateTodo from './components/CreateTodo';
import HeadTodo from './components/HeadTodo';
import ListTodo from './components/ListTodo';
// import { API } from '../../config';
import styled from 'styled-components';

const Todo = () => {
  const [todoList, setTodoList] = useState([]); // 리스트 불러오기 위한 state
  const [accessToken, setAccessToken] = useState(''); // 토큰을 담기 위한 state

  useEffect(() => {
    const access_token = localStorage.getItem('access_token');
    setAccessToken(access_token); // 변수에 토큰 불러오고 state에 토큰 담음

    const getTodo = async () => {
      await axios({
        method: 'GET',
        url: 'https://pre-onboarding-selection-task.shop/todos',
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then(res => {
          setTodoList(res.data); // state 안에 불러온 todo 담기
        })
        .catch(err => {
          console.log(err.res.data.message);
        });
    };
    getTodo();
  }, []);
  // 위의 코드들로 todoList와 accessToken 안에 각각의 데이터가 담긴 상태.

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

  /* margin-top: 96px;
  margin-bottom: 32px; */
  display: flex;
  flex-direction: column;
`;

export default Todo;
