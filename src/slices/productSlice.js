import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const productSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    updateStatus: (state, action) => {
      const index = state.product.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index !== -1) {
        state.product[index].status = action.payload.status;
      }
    },
  },
});

export const { updateStatus, setProduct } = productSlice.actions;
export const selectCount = (state) => state.counter.value;

export default productSlice.reducer;
