import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchQuote, fetchTransactionParams } from '../../services/api';

export const fetchQuoteData = createAsyncThunk('quote/fetchQuote', async (params) => {
  const response = await fetchQuote(params);
  return response;
});

export const fetchTransactionData = createAsyncThunk('transaction/fetchTransactionParams', async (params) => {
  const response = await fetchTransactionParams(params);
  return response;
});

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: null,
    transactionParams: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuoteData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuoteData.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload;
      })
      .addCase(fetchQuoteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchTransactionData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTransactionData.fulfilled, (state, action) => {
        state.loading = false;
        state.transactionParams = action.payload;
      })
      .addCase(fetchTransactionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default quoteSlice.reducer;
