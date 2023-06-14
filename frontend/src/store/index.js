import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export * from './thunks/fetchProducts';
export * from './thunks/removePorduct';
