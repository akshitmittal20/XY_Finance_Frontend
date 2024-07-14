import React from 'react';

const TransactionParamsDisplay = ({ transactionParams }) => {
  if (!transactionParams || !transactionParams.route) {
    return null; // Don't render anything if transactionParams or transactionParams.route is undefined
  }

  const { route } = transactionParams;

  return (
    <div className="transaction-params">
      <h2>Transaction Parameters</h2>
      <p><strong>Source Chain ID:</strong> {route.srcChainId}</p>
      <p><strong>Source Token Address:</strong> {route.srcQuoteTokenAddress}</p>
      <p><strong>Source Token Amount:</strong> {route.srcQuoteTokenAmount}</p>
      <p><strong>Destination Chain ID:</strong> {route.dstChainId}</p>
      <p><strong>Destination Token Address:</strong> {route.dstQuoteTokenAddress}</p>
      <p><strong>Slippage:</strong> {route.slippage}%</p>
      <p><strong>Bridge Provider:</strong> {route.bridgeDescription.provider}</p>
      <p><strong>Bridge Contract Address:</strong> {route.bridgeDescription.bridgeContractAddress}</p>
      <p><strong>Gas Needed:</strong> {route.estimatedGas}</p>
      <p><strong>Provider:</strong> {route.srcSwapDescription.provider}</p>
    </div>
  );
};

export default TransactionParamsDisplay;
