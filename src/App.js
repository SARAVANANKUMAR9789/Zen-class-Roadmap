import React from 'react';
import { ItemsProvider } from './com/ItemsContext';
import ItemsList from './com/ItemsList';

const App = () => {
  return (
    <ItemsProvider>
      <ItemsList />
    </ItemsProvider>
  );
};

export default App;
