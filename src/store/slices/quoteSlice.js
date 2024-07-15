import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchQuote, fetchTransactionParams } from '../../services/api';

export const fetchQuoteData = createAsyncThunk('quote/fetchQuote', async (params, { rejectWithValue }) => {
  try {
    const response = await fetchQuote(params);
    if (!response.success) {
      return rejectWithValue(response.errorMsg);
    }
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

export const fetchTransactionData = createAsyncThunk('transaction/fetchTransactionParams', async (params, { rejectWithValue }) => {
  try {
    const response = await fetchTransactionParams(params);
    if (!response.success) {
      return rejectWithValue(response.errorMsg);
    }
    return response;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
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
        state.error = null;
      })
      .addCase(fetchQuoteData.fulfilled, (state, action) => {
        state.loading = false;
        state.quote = action.payload;
      })
      .addCase(fetchQuoteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(fetchTransactionData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactionData.fulfilled, (state, action) => {
        state.loading = false;
        state.transactionParams = action.payload;
      })
      .addCase(fetchTransactionData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default quoteSlice.reducer;
