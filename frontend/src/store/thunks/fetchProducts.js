import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const { data } = await axios.get('http://localhost:5000/api/products');

  return data;
});
