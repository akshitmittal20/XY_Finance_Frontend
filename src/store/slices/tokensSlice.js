import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRecommendedTokens } from '../../services/api';

export const fetchTokens = createAsyncThunk('tokens/fetchTokens', async (chainId) => {
  const response = await fetchRecommendedTokens(chainId);
  return response.recommendedTokens;
});

const tokensSlice = createSlice({
  name: 'tokens',
  initialState: {
    tokens: [],
    status: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTokens.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTokens.fulfilled, (state, { payload }) => {
        state.tokens = payload;
        state.status = 'success';
      })
      .addCase(fetchTokens.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default tokensSlice.reducer;
