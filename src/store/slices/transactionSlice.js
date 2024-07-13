import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTransactionParams as fetchTransactionParamsAPI } from '../../services/api';

export const fetchTransactionParams = createAsyncThunk('transaction/fetchTransactionParams', async (data) => {
  const response = await fetchTransactionParamsAPI(data);
  return response;
});

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transaction: null,
    status: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactionParams.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTransactionParams.fulfilled, (state, { payload }) => {
        state.transaction = payload;
        state.status = 'success';
      })
      .addCase(fetchTransactionParams.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default transactionSlice.reducer;
