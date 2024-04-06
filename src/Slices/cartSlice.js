import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [{
      id: 1, 
      imageUrl: 'https://df0b18phdhzpx.cloudfront.net/ckeditor_assets/pictures/1431157/original_BYJ-BGPC-21-SENIOR-B_A-Q015.jpg',
      name: 'Item 1',
      description: "We then calculate the total quantity.",
      quantity: 0,
      price: 10
    },
    {
      id: 2,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-WQ-6sA1W7CMLA-W9iSYbQzKdTTc6DGD7g&usqp=CAU',
      name: 'Item 2',
      description:"An apple mobile which is nothing like apple.",
      quantity: 0,
      price: 20
    },
    {
      id: 3, 
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1348724841i/546960.jpg',
      name: 'Item 3',
      description:"total price using the helper functions in the component.",
      quantity: 0,
      price: 30
    }],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
      state.totalAmount=state.items.reduce((total, item) => total + (item.quantity * item.price), 0);
      state.totalQuantity=state.items.reduce((total, item) => total + item.quantity, 0);
    },
    increaseQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index].quantity++;
      }
      state.totalAmount=state.items.reduce((total, item) => total + (item.quantity * item.price), 0);
      state.totalQuantity=state.items.reduce((total, item) => total + item.quantity, 0);
    },
    decreaseQuantity: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1 && state.items[index].quantity > 0) {
        state.items[index].quantity--;
      }
      state.totalAmount=state.items.reduce((total, item) => total + (item.quantity * item.price), 0);
      state.totalQuantity=state.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
