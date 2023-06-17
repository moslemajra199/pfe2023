import { createSlice } from '@reduxjs/toolkit';

const bomSlices = createSlice({
  name: 'boms',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
});
