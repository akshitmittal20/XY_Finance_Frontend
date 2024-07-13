import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSupportedChains } from '../../services/api';

export const fetchChains = createAsyncThunk('chains/fetchChains', async () => {
  const response = await fetchSupportedChains();
  return response.supportedChains;
});

const chainsSlice = createSlice({
  name: 'chains',
  initialState: {
    chains: [],
    status: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchChains.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChains.fulfilled, (state, { payload }) => {
        state.chains = payload;
        state.status = 'success';
      })
      .addCase(fetchChains.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default chainsSlice.reducer;
