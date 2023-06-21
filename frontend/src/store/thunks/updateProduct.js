import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const updateProduct = createAsyncThunk(
  'products/update',
  async (product) => {
    const { id, inputs } = product;
    const { data } = await axios.put(
      `http://localhost:5000/api/products/${id}`,
      inputs
    );
    // console.log('my data', data);
    return data;
  }
);
