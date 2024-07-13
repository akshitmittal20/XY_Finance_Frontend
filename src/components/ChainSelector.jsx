import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChains } from '../store/slices/chainsSlice';

const ChainSelector = ({ onSelect }) => {
  const dispatch = useDispatch();
  const chains = useSelector((state) => state.chains.chains);

  useEffect(() => {
    dispatch(fetchChains());
  }, [dispatch]);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a chain</option>
      {chains.map(chain => (
        <option key={chain.chainId} value={chain.chainId}>
          {chain.name}
        </option>
      ))}
    </select>
  );
};

export default ChainSelector;
