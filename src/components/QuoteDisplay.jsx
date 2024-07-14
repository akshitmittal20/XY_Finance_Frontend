import React from 'react';

const QuoteDisplay = ({ quote }) => {
  if (!quote || !quote.routes) {
    return null; // Don't render anything if quote or quote.routes is undefined
  }

  return (
    <div className="quote-result">
      <h2>Quote</h2>
      {quote.routes.map((route, index) => (
        <div key={index}>
          <p><strong>Source Chain ID:</strong> {route.srcChainId}</p>
          <p><strong>Source Token Address:</strong> {route.srcQuoteTokenAddress}</p>
          <p><strong>Source Token Amount:</strong> {route.srcQuoteTokenAmount}</p>
          <p><strong>Destination Chain ID:</strong> {route.dstChainId}</p>
          <p><strong>Destination Token Address:</strong> {route.dstQuoteTokenAddress}</p>
          <p><strong>Slippage:</strong> {route.slippage}%</p>
          <p><strong>Gas Needed:</strong> {route.estimatedGas}</p>
          <p><strong>Provider:</strong> {route.srcSwapDescription.provider}</p>
        </div>
      ))}
    </div>
  );
};

export default QuoteDisplay;
