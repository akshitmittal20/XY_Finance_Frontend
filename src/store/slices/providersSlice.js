import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSupportedSwapProviders } from '../../services/api';

export const fetchProviders = createAsyncThunk('providers/fetchProviders', async (chainId) => {
  const response = await fetchSupportedSwapProviders(chainId);
  return response;
});

const providersSlice = createSlice({
  name: 'providers',
  initialState: {
    providers: [],
    status: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProviders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProviders.fulfilled, (state, { payload }) => {
        state.providers = payload;
        state.status = 'success';
      })
      .addCase(fetchProviders.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default providersSlice.reducer;
