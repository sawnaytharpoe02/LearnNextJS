'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
import { login, logout, toggleModerator } from '@/redux/features/auth-slice';

const Login = () => {
  const [name, setName] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);

  const onClickLogin = () => {
    dispatch(login(name));
    setName('');
  };

  const onClickLogout = () => {
    dispatch(logout());
  };

  const onClickToggleModerator = () => {
    dispatch(toggleModerator());
  };

  return (
    <div>
      <input
        className="text-black"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <button onClick={onClickLogin}>Login</button>
      <br />
      <button onClick={onClickLogout}>Log out</button>
      <br />

      {isAuth && (
        <button onClick={onClickToggleModerator}>
          Toggle Moderator Status
        </button>
      )}
    </div>
  );
};

export default Login;
