import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionParams } from '../store/slices/transactionSlice';

const TransactionParams = ({ quote, swapProvider }) => {
  const [params, setParams] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const getParams = async () => {
      if (quote && swapProvider) {
        const { srcChainId, srcQuoteTokenAddress, srcQuoteTokenAmount, dstChainId, dstQuoteTokenAddress, slippage, route } = quote.routes[0];
        const result = await dispatch(fetchTransactionParams({
          srcChainId,
          srcQuoteTokenAddress,
          srcQuoteTokenAmount,
          dstChainId,
          dstQuoteTokenAddress,
          slippage,
          bridgeProvider: route.bridgeDescription.provider,
          receiver: '0x9cEEEbdF49cF5DEa891C9D74f8ea03af2aCf284F', // Example receiver address
          srcBridgeTokenAddress: route.bridgeDescription.srcBridgeTokenAddress,
          dstBridgeTokenAddress: route.bridgeDescription.dstBridgeTokenAddress,
          dstSwapProvider: swapProvider
        }));
        setParams(result.payload);
      }
    };
    getParams();
  }, [quote, swapProvider, dispatch]);

  return (
    <div>
      {params ? (
        <pre>{JSON.stringify(params, null, 2)}</pre>
      ) : (
        <p>Loading transaction parameters...</p>
      )}
    </div>
  );
};

export default TransactionParams;
