import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/User/SignIn';
import SignUp from './pages/User/SignUp';
import Todo from './pages/Todo/Todo';

function Router() {
  const [token, setToken] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setToken(false);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <SignIn /> : <Navigate to="/todo" />}
        />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/todo" element={token ? <Navigate to="/" /> : <Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
