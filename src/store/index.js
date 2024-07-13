import { configureStore } from '@reduxjs/toolkit';
import chainsReducer from './slices/chainsSlice';
import tokensReducer from './slices/tokensSlice';
import providersReducer from './slices/providersSlice';
import quoteReducer from './slices/quoteSlice';
import transactionReducer from './slices/transactionSlice';

export const store = configureStore({
  reducer: {
    chains: chainsReducer,
    tokens: tokensReducer,
    providers: providersReducer,
    quote: quoteReducer,
    transaction: transactionReducer
  },
});
