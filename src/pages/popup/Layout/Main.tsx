import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import useStorage from '@root/src/shared/hooks/useStorage';
import exampleThemeStorage from '@root/src/shared/storages/exampleThemeStorage';

const Main = () => {
  const theme = useStorage(exampleThemeStorage);
  return (
    <div className={`${theme === 'light' ? 'bg-white' : 'bg-[#1D1B22]'}`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
