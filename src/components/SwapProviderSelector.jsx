import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProviders } from '../store/slices/providersSlice';

const SwapProviderSelector = ({ chainId, onSelect }) => {
  const dispatch = useDispatch();
  const providers = useSelector((state) => state.providers.providers);

  useEffect(() => {
    if (chainId) {
      dispatch(fetchProviders(chainId));
    }
  }, [chainId, dispatch]);

  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      <option value="">Select a swap provider</option>
      {providers.map(provider => (
        <option key={provider.name} value={provider.name}>
          {provider.name}
        </option>
      ))}
    </select>
  );
};

export default SwapProviderSelector;
