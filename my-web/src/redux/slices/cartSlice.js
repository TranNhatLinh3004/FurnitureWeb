import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    deleteItem: (state, action) => {
      //   console.log("delete");
      const id = action.payload;
      //action.payload là một thuộc tính trong đối tượng action của Redux.
      //được sử dụng để truy cập dữ liệu được gửi kèm theo action
      const existingItem = state.cartItem.find((item) => item.id === id);

      if (existingItem) {
        state.cartItem = state.cartItem.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - 1;
      }
      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
    },
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItemIndex = state.cartItem.findIndex(
        (item) => item.id === newItem.id
      );
      // const existingItem = state.cartItem[existingItemIndex];

      if (existingItemIndex === -1) {
        state.cartItem.push({
          id: newItem.id,
          productName: newItem.productName,
          price: newItem.price,
          imgUrl: newItem.imgUrl,
          quantity: newItem.quantity,
          //   quantity: 1,

          totalPrice: newItem.price,
        });
        state.totalQuantity++;
      } else {
        state.cartItem[existingItemIndex].quantity += newItem.quantity;
        state.cartItem[existingItemIndex].totalPrice += Number(newItem.price);
      }

      state.totalAmount = state.cartItem.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      console.log(state.totalQuantity);
      console.log(state.cartItem);
      console.log(newItem);
    },
  },
});

export const cartActives = cartSlice.actions;

export default cartSlice.reducer;
