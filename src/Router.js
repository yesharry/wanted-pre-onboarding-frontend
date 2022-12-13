import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';
import Todo from './pages/Todo/Todo';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
