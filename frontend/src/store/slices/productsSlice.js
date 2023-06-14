import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../thunks/fetchProducts';
import { removeProduct } from '../thunks/removePorduct';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });

    builder.addCase(removeProduct.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(removeProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      const index = state.data.indexOf(action.payload);
      state.data.splice(index, 1);
    });

    builder.addCase(removeProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const productReducer = productsSlice.reducer;
