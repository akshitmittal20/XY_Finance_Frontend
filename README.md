# Bridge Application Frontend

This is the frontend application for the Bridge Application project, built using React.js and Redux for state management. It provides an interface for users to fetch token and chain data, get quotes for token swaps, and display transaction parameters.

## Screenshots
- ![Bridge Application](./src/assets/Screenshot%202024-07-14%20at%2011.08.34%20AM.png)

-  
![Bridge Application](./src/assets/Screenshot%202024-07-14%20at%2011.09.22%20AM.png)
![Bridge Application](./src/assets/Screenshot%202024-07-14%20at%2011.10.11%20AM.png)
![Bridge Application](./src/assets/Screenshot%202024-07-14%20at%2011.10.24%20AM.png)

## Project Structure

The project is organized into the following directories:

```
frontend_XY_Finance/
│
├── public/
│   └── index.html          # HTML template
│
├── src/
│   ├── assets/             # Static assets (e.g., images, fonts)
│   ├── components/         # React components
│   │   ├── Footer.jsx
│   │   ├── QuoteForm.jsx
│   │   ├── TransactionParams.jsx
│   │   ├── QuoteForm.css
│   │   ├── Footer.css
│   │   └── TransactionParams.css
│   │
│   ├── pages/              # Pages
│   │   └── Home.jsx
│   │
│   ├── services/           # API services
│   │   └── api.js
│   │
│   ├── store/              # Redux store and slices
│   │   ├── slices/
│   │   │   ├── chainsSlice.js
│   │   │   ├── tokensSlice.js
│   │   │   └── quoteSlice.js
│   │   └── store.js
│   │
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global CSS styles
│   ├── index.js            # Entry point for React
│   └── global.css          # Global CSS for dark theme
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js          # Vite configuration file
```

## Features

- **Dynamic Display of Tokens and Chains**: Fetches and displays supported tokens and chains from the backend.
- **Form Submission**: Allows users to select source and destination chains and tokens, input the amount and slippage, and get quotes.
- **Display Transaction Parameters**: Shows the parameters needed to execute the transaction.
- **Dark Theme**: Sleek and classy dark theme for better visual appeal.
- **Footer**: Acknowledgement line in the footer.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd frontend_XY_Finance
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:5173`.

## How to Use

1. **Select Source Chain**: Choose the source blockchain chain.
2. **Select Source Token**: Choose the source token.
3. **Select Source Swap Provider**: Choose the source swap provider.
4. **Enter Amount**: Input the amount to swap.
5. **Select Destination Chain**: Choose the destination blockchain chain.
6. **Select Destination Token**: Choose the destination token.
7. **Select Destination Swap Provider**: Choose the destination swap provider.
8. **Enter Slippage**: Input the slippage value.
9. **Get Quote**: Click the "Get Quote" button to fetch the quote.
10. **Bridge**: If a quote is fetched successfully, click the "Bridge" button to get the transaction parameters.

## Sample Test Inputs

Here are a few sample correct test inputs for the quote form:

- **Source Chain**: ETHEREUM
- **Source Token**: ZRO
- **Source Swap Provider**: OKX DEX
- **Amount**: 1000000000000000000
- **Destination Chain**: BSC
- **Destination Token**: ZRO
- **Destination Swap Provider**: OKX DEX
- **Slippage**: 1

## API Endpoints

- **GET /api/supportedChains**: Fetches supported chains.
- **GET /api/recommendedTokens**: Fetches recommended tokens for a specified chain.
- **GET /api/supportedSwapProviders**: Fetches supported swap providers for a specified chain.
- **POST /api/quotes**: Gets a quote for a token swap.
- **POST /api/params**: Gets transaction parameters for a token swap.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Redux**: State management library.
- **Vite**: Next-generation frontend tooling.
- **CSS**: Styling the application.

## Styling

The application uses a sleek and classy dark theme for a better visual experience. The main components include:
- **Outer Container**: Dark background with a slightly lighter inner container.
- **Forms**: Styled with dark backgrounds and lighter text for better readability.
- **Footer**: Fixed at the bottom with a dark background and light text.

## Contributors

- Akshit Mittal

## Acknowledgements

This application uses the XY Finance API to fetch blockchain and token data.

---

Thank you for using the Bridge Application. For any queries or feedback, please contact Akshit Mittal.
```

This `README.md` file now includes a section for sample test inputs, providing users with example values to use when testing the quote form.