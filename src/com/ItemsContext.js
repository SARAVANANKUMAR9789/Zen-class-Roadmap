import React, { createContext, useContext, useState } from 'react';

const ItemsContext = createContext();

export const useItems = () => {
  return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }) => {
  // Sample data, arrays of objects
  const [items1, setItems1] = useState([
    {
      id: 1, 
      imageUrl: 'https://df0b18phdhzpx.cloudfront.net/ckeditor_assets/pictures/1431157/original_BYJ-BGPC-21-SENIOR-B_A-Q015.jpg',
      name: 'Item 1',
      description: "An apple mobile which is nothing like apple",
      quantity: 0,
      price: 10
    },
    {
      id: 2,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-WQ-6sA1W7CMLA-W9iSYbQzKdTTc6DGD7g&usqp=CAU',
      name: 'Item 2',
      description:"An apple mobile which is nothing like apple",
      quantity: 0,
      price: 20
    },
    {
      id: 3, 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348724841i/546960.jpg',
      name: 'Item 3',
      description:"An apple mobile which is nothing like apple",
      quantity: 0,
      price: 30
    },
  ]);

  // Increment the quantity of the selected item
  const handleIncrement = (itemIndex) => {
    const newArray = [...items1];
    newArray[itemIndex].quantity++;
    setItems1(newArray);
  };

  // Decrement the quantity of the selected item
  const handleDecrement = (itemIndex) => {
    const newArray = [...items1];
    if (newArray[itemIndex].quantity > 0) {
      newArray[itemIndex].quantity--;
      setItems1(newArray);
    }
  };

  // Remove the item from the list
  const handleRemove = (itemIndex) => {
    const newArray = [...items1];
    newArray.splice(itemIndex, 1);
    setItems1(newArray);
  };

  return (
    <ItemsContext.Provider value={{ items1, handleIncrement, handleDecrement, handleRemove }}>
      {children}
    </ItemsContext.Provider>
  );
};
