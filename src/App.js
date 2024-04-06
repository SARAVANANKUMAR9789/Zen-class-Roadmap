import React from 'react';
import { CartPage } from './com/CartPage';
import { TotalItem } from './com/TotalItem';

const App = () => {
  return (
    <>
    <h1>React Redux Task</h1><hr/>
      <CartPage /><hr/>
      <TotalItem />
    </>
  );
};

export default App;
