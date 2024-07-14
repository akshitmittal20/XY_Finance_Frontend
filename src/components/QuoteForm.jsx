import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChains } from '../store/slices/chainsSlice';
import { fetchTokens } from '../store/slices/tokensSlice';
import { fetchQuoteData, fetchTransactionData } from '../store/slices/quoteSlice';
import { fetchSupportedSwapProviders } from '../services/api';
import './QuoteForm.css';
import QuoteDisplay from './QuoteDisplay';
import TransactionParamsDisplay from './TransactionParamsDisplay';
import { Modal, Button } from 'antd';

const QuoteForm = () => {
  const dispatch = useDispatch();
  const chains = useSelector((state) => state.chains.chains);
  const tokens = useSelector((state) => state.tokens.tokens);
  const quote = useSelector((state) => state.quote.quote);
  const transactionParams = useSelector((state) => state.quote.transactionParams);
  const [srcChainId, setSrcChainId] = useState('');
  const [dstChainId, setDstChainId] = useState('');
  const [srcToken, setSrcToken] = useState('');
  const [dstToken, setDstToken] = useState('');
  const [amount, setAmount] = useState('');
  const [slippage, setSlippage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [srcSwapProviders, setSrcSwapProviders] = useState([]);
  const [dstSwapProviders, setDstSwapProviders] = useState([]);
  const [selectedSrcSwapProvider, setSelectedSrcSwapProvider] = useState('');
  const [selectedDstSwapProvider, setSelectedDstSwapProvider] = useState('');
  const [isQuoteModalVisible, setIsQuoteModalVisible] = useState(false);
  const [isBridgeModalVisible, setIsBridgeModalVisible] = useState(false);

  useEffect(() => {
    dispatch(fetchChains());
  }, [dispatch]);

  useEffect(() => {
    if (srcChainId) {
      dispatch(fetchTokens(srcChainId));
      fetchSupportedSwapProviders(srcChainId).then((data) => setSrcSwapProviders(data));
    }
  }, [srcChainId, dispatch]);

  useEffect(() => {
    if (dstChainId) {
      dispatch(fetchTokens(dstChainId));
      fetchSupportedSwapProviders(dstChainId).then((data) => setDstSwapProviders(data));
    }
  }, [dstChainId, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const minThreshold = 247619047619047; // Example minimum threshold in wei for ETH

    if (Number(amount) < minThreshold) {
      setErrorMessage(`Amount should be at least ${minThreshold} wei`);
      return;
    }

    setErrorMessage('');

    dispatch(fetchQuoteData({
      srcChainId,
      srcQuoteTokenAddress: srcToken,
      srcQuoteTokenAmount: amount,
      dstChainId,
      dstQuoteTokenAddress: dstToken,
      slippage
    }));
    setIsQuoteModalVisible(true); // Show the quote modal
  };

  const handleBridge = () => {
    if (quote) {
      const params = {
        srcChainId,
        srcQuoteTokenAddress: srcToken,
        srcQuoteTokenAmount: amount,
        dstChainId,
        dstQuoteTokenAddress: dstToken,
        slippage,
        bridgeProvider: quote.routes[0].bridgeDescription.provider,
        receiver: '0x9cEEEbdF49cF5DEa891C9D74f8ea03af2aCf284F', // Replace with actual receiver address
        srcBridgeTokenAddress: quote.routes[0].bridgeDescription.srcBridgeTokenAddress,
        dstBridgeTokenAddress: quote.routes[0].bridgeDescription.dstBridgeTokenAddress,
        srcSwapProvider: selectedSrcSwapProvider,
        dstSwapProvider: selectedDstSwapProvider,
      };

      dispatch(fetchTransactionData(params));
      setIsBridgeModalVisible(true); // Show the bridge modal
    }
  };

  const closeQuoteModal = () => {
    setIsQuoteModalVisible(false);
  };

  const closeBridgeModal = () => {
    setIsBridgeModalVisible(false);
  };

  return (
    <form onSubmit={handleSubmit} className="quote-form">
      <h2>Bridge Application</h2>
      <div className="form-group">
        <label>Source Chain</label>
        <select value={srcChainId} onChange={(e) => setSrcChainId(e.target.value)}>
          <option value="">Select Source Chain</option>
          {chains.map((chain) => (
            <option key={chain.chainId} value={chain.chainId}>
              {chain.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Source Token</label>
        <select value={srcToken} onChange={(e) => setSrcToken(e.target.value)}>
          <option value="">Select Source Token</option>
          {tokens.map((token) => (
            <option key={token.address} value={token.address}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Source Swap Provider</label>
        <select value={selectedSrcSwapProvider} onChange={(e) => setSelectedSrcSwapProvider(e.target.value)}>
          <option value="">Select Source Swap Provider</option>
          {srcSwapProviders.map((provider) => (
            <option key={provider.name} value={provider.name}>
              {provider.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
      </div>
      <div className="form-group">
        <label>Destination Chain</label>
        <select value={dstChainId} onChange={(e) => setDstChainId(e.target.value)}>
          <option value="">Select Destination Chain</option>
          {chains.map((chain) => (
            <option key={chain.chainId} value={chain.chainId}>
              {chain.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Destination Token</label>
        <select value={dstToken} onChange={(e) => setDstToken(e.target.value)}>
          <option value="">Select Destination Token</option>
          {tokens.map((token) => (
            <option key={token.address} value={token.address}>
              {token.symbol}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Destination Swap Provider</label>
        <select value={selectedDstSwapProvider} onChange={(e) => setSelectedDstSwapProvider(e.target.value)}>
          <option value="">Select Destination Swap Provider</option>
          {dstSwapProviders.map((provider) => (
            <option key={provider.name} value={provider.name}>
              {provider.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Slippage</label>
        <input
          type="number"
          value={slippage}
          onChange={(e) => setSlippage(e.target.value)}
          placeholder="Slippage"
        />
      </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <button type="submit" className="quote-button">Get Quote</button>
      <button type="button" className="bridge-button" onClick={handleBridge}>Bridge</button>
      
      <Modal
        title="Quote Result"
        visible={isQuoteModalVisible}
        onCancel={closeQuoteModal}
        footer={null}
        bodyStyle={{ backgroundColor: '#1f1f1f', color: '#fff' }} // Set modal background to black and text to white
      >
        {quote && <QuoteDisplay quote={quote} />}
      </Modal>

      <Modal
        title="Bridge Transaction Parameters"
        visible={isBridgeModalVisible}
        onCancel={closeBridgeModal}
        footer={null}
        bodyStyle={{ backgroundColor: '#1f1f1f', color: '#fff' }} // Set modal background to black and text to white
      >
        {transactionParams && <TransactionParamsDisplay transactionParams={transactionParams} />}
      </Modal>
    </form>
  );
};

export default QuoteForm;
