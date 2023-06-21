import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBoms = createAsyncThunk('boms/fetch', async () => {
  const { data } = await axios.get('http://localhost:5000/api/boms');

  return data;
});
