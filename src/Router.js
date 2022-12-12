import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
