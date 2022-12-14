import React, { useState } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';

const CreateTodo = ({ accessToken }) => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  const [post, setPost] = useState({
    todo: '',
  });

  const { todo } = post;

  const postTodo = async () => {
    await axios({
      method: 'POST',
      url: 'https://pre-onboarding-selection-task.shop/todos',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      data: { todo: todo },
    })
      .then(res => {
        alert('등록되었습니다.');
        // window.location.reload('/todo');
      })
      .catch(err => {
        alert(err.res.data.message);
      });
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  return (
    <>
      {open && (
        <InsertFormPosition>
          <InsertForm>
            <Input autoFocus onChange={handleInput} />
            <Btn onClick={postTodo}>등록</Btn>
          </InsertForm>
        </InsertFormPosition>
      )}
      <CircleBtn onClick={onToggle} open={open}>
        <MdAdd />
      </CircleBtn>
    </>
  );
};

const CircleBtn = styled.button`
  background-color: #38d9a9;
  &:hover {
    background-color: #63e6be;
  }
  &:active {
    background-color: #20c997;
  }
  z-index: 5;
  width: 60px;
  height: 60px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPosition = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;

  display: flex;
`;

const Input = styled.input.attrs(props => ({
  type: 'text',
  name: 'todo',
  placeholder: '할 일을 입력해주세요',
}))`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-right: 5px;
`;

const Btn = styled.button`
  width: 50px;
  background-color: #38d9a9;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #63e6be;
  }
  &:active {
    background-color: #20c997;
  }
`;

export default CreateTodo;
