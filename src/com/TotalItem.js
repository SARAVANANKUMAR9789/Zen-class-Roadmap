import { useSelector } from 'react-redux';
import React from 'react';

export const TotalItem = () => {

  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <>
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Price: ${totalAmount}</p>
    </>
  );
};
  