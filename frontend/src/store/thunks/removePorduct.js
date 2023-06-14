import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const removeProduct = createAsyncThunk('products/remove', async (product) => {
  const { data } = await axios.delete(
    `http://localhost:5000/api/products/${product.id}`
  );

  return data;
});

