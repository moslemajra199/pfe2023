import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createProduct = createAsyncThunk(
  'products/add',
  async (product) => {
    const { data } = await axios.post('http://localhost:5000/api/products', {
      ...product,
    });

    return data;
  }
);
