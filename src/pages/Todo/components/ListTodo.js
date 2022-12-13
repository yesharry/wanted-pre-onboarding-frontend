import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemTodo from './ItemTodo';
import styled from 'styled-components';

const ListTodo = ({ todoList, accessToken }) => {
  // const [todoList, setTodoList] = useState([]);
  // const [accessToken, setAccessToken] = useState('');

  // useEffect(() => {
  //   const access_token = localStorage.getItem('access_token');
  //   setAccessToken(access_token);
  //   const getTodo = async () => {
  //     await axios({
  //       method: 'GET',
  //       url: 'https://pre-onboarding-selection-task.shop/todo',
  //       headers: { Authorization: `Bearer ${access_token}` },
  //     })
  //       .then(res => {
  //         setTodoList(res.data);
  //       })
  //       .catch(err => {
  //         console.log(err.res.data.message);
  //       });
  //   };
  //   getTodo();
  // }, []);

  return (
    <ListWrapper>
      {todoList.map(todoList => (
        <ItemTodo
          key={todoList.id}
          todoList={todoList}
          accessToken={accessToken}
        />
      ))}
      <ItemTodo text="프리온보딩 과제 끝내기" done={true} />
      <ItemTodo text="프리온보딩 참가 신청하기" done={false} />
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
