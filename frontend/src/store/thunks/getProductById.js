import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProductById = createAsyncThunk('products/get', async (id) => {
  const { data } = await axios.get(`http://localhost:5000/api/products/${id}`);
  return data;
});
