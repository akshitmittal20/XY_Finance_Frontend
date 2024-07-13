import React, { useState } from 'react';
import QuoteForm from '../components/QuoteForm';
import TransactionParams from '../components/TransactionParams';
import './Home.css'; // Import the CSS file

const Home = () => {
  const [quote, setQuote] = useState(null);
  const [swapProvider, setSwapProvider] = useState('');

  const handleQuoteReceived = (quoteData, provider) => {
    setQuote(quoteData);
    setSwapProvider(provider);
  };

  return (
    <div className="home-container">
      <h1>Bridge Application</h1>
      <QuoteForm onQuoteReceived={handleQuoteReceived} />
      {quote && (
        <TransactionParams quote={quote} swapProvider={swapProvider} />
      )}
    </div>
  );
};

export default Home;
