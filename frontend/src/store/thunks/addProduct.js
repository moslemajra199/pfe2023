import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createProduct = createAsyncThunk('products/add', async (product) => {
  const { data } = await axios.posy('http://localhost/api/products', {
    ...product,
  });

  return product;
});
