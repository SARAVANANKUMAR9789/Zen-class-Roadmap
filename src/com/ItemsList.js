import React from 'react';
import '../index.css'; 
import { useItems } from './ItemsContext';

const Item = ({ item, index }) => {
  const { handleIncrement, handleDecrement, handleRemove } = useItems();

  return (
    <div>
      <div className="item-container">
        <img className="item-image" src={item.imageUrl} alt={item.name} />
        <div className="item-details">
          <p>{item.name}</p>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <div className="item-buttons">
            <button onClick={() => handleDecrement(index)}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => handleIncrement(index)}>+</button><br />
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ItemsList = () => {
  const { items1 } = useItems();

  // Calculate total price and total quantity
  const totalPrice = items1.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const totalQuantity = items1.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div>
      <nav><h1 className='navtag'>React useContext Task</h1></nav><hr />
      <div className='item-Dis'>
        {items1.map((item, index) => (
          <Item key={item.id} item={item} index={index} />
        ))}
      </div><hr />
      <div className="total">
        <p>Total Quantity: {totalQuantity}</p>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default ItemsList;
