import { createSlice } from '@reduxjs/toolkit';
import { fetchBoms } from '../thunks/fetchBoms';

const bomSlices = createSlice({
  name: 'boms',
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },

  extraReducers(builder) {
    builder.addCase(fetchBoms.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchBoms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchBoms.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const BomsReducer = bomSlices.reducer