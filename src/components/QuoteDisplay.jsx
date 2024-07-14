import React from 'react';

const QuoteDisplay = ({ quote }) => {
  if (!quote || !quote.routes) {
    return <div className="quote-result">No routes available</div>;
  }

  return (
    <div className="quote-result">
      <h2>Quote</h2>
      {quote.routes.map((route, index) => (
        <div key={index} className="route">
          <h3 style={{ color: '#ff9800' }}>Route {index + 1}</h3>
          <p><strong>Source Chain ID:</strong> {route.srcChainId}</p>
          <p><strong>Source Token Address:</strong> {route.srcQuoteTokenAddress}</p>
          <p><strong>Source Token Amount:</strong> {route.srcQuoteTokenAmount}</p>
          <p><strong>Destination Chain ID:</strong> {route.dstChainId}</p>
          <p><strong>Destination Token Address:</strong> {route.dstQuoteTokenAddress}</p>
          <p><strong>Slippage:</strong> {route.slippage}%</p>
          <p><strong>Gas Needed:</strong> {route.estimatedGas}</p>
          {route.srcSwapDescription && (
            <p><strong>Provider:</strong> {route.srcSwapDescription.provider}</p>
          )}
          <p><strong>Destination Token Amount:</strong> {route.dstQuoteTokenAmount}</p>
          <p><strong>Minimum Receive Amount:</strong> {route.minReceiveAmount}</p>
          {route.bridgeDescription && (
            <>
              <h4>Bridge Description</h4>
              <p><strong>Provider:</strong> {route.bridgeDescription.provider}</p>
              <p><strong>Source Bridge Token Address:</strong> {route.bridgeDescription.srcBridgeTokenAddress}</p>
              <p><strong>Destination Bridge Token Address:</strong> {route.bridgeDescription.dstBridgeTokenAddress}</p>
              <p><strong>Bridge Fee Amount:</strong> {route.bridgeDescription.bridgeFeeAmount}</p>
              <p><strong>Bridge Fee Token:</strong> {route.bridgeDescription.bridgeFeeToken.symbol}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default QuoteDisplay;
