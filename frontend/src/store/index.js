import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './slices/productsSlice';
import { BomsReducer } from './slices/bomSlices';

export const store = configureStore({
  reducer: {
    products: productReducer,
    boms: BomsReducer,
  },
});

export * from './thunks/fetchProducts';
export * from './thunks/removePorduct';
export * from './thunks/createProduct';
export * from './thunks/getProductById';
export * from './thunks/fetchBoms';
export * from "./thunks/updateProduct"
