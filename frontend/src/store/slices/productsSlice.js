import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../thunks/fetchProducts';
import { removeProduct } from '../thunks/removePorduct';
import { createProduct } from '../thunks/addProduct';

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

    builder.addCase(createProduct.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(createProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });

    builder.addCase(createProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const productReducer = productsSlice.reducer;
