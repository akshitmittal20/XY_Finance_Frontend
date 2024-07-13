import axios from 'axios';

const API_BASE_URL = 'https://xy-finance-backend.vercel.app/api';

export const fetchSupportedChains = async () => {
  const response = await axios.get(`${API_BASE_URL}/supportedChains`);
  return response.data;
};

export const fetchRecommendedTokens = async (chainId) => {
  const response = await axios.get(`${API_BASE_URL}/recommendedTokens?chain=${chainId}`);
  return response.data;
};

export const fetchSupportedSwapProviders = async (chainId) => {
  const response = await axios.get(`${API_BASE_URL}/supportedSwapProviders?chainId=${chainId}`);
  return response.data;
};

export const fetchQuote = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/quotes`, data);
  return response.data;
};

export const fetchTransactionParams = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/params`, data);
  return response.data;
};