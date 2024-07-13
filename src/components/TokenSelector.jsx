import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTokens } from '../store/slices/tokensSlice';

const TokenSelector = ({ chainId, onSelect }) => {
  const dispatch = useDispatch();
  const tokens = useSelector((state) => state.tokens.tokens);

  useEffect(() => {
    if (chainId) {
      dispatch(fetchTokens(chainId));
    }
  }, [chainId, dispatch]);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a token</option>
      {tokens.map(token => (
        <option key={token.address} value={token.address}>
          {token.symbol}
        </option>
      ))}
    </select>
  );
};

export default TokenSelector;
