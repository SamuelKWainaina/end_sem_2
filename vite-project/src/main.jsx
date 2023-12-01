// Import React library for creating React components
import React from 'react';

// Import ReactDOM for rendering React components into the DOM
import ReactDOM from 'react-dom/client';

// Import the main App component
import App from './App.jsx';

// Import the main styles for the application
import './index.css';

// Import the Provider component from 'react-redux' for providing the Redux store to the app
import { Provider } from 'react-redux';

// Import the Redux store
import { store } from './redux/store.jsx';

// Use ReactDOM.createRoot to render the React app into the DOM
// with document.getElementById('root') as the root element
ReactDOM.createRoot(document.getElementById('root')).render(
  // Use React.StrictMode to enable additional checks and warnings for common mistakes
  <React.StrictMode>
    {/* Use the Provider component to provide the Redux store to the entire app */}
    <Provider store={store}>
      {/* Render the main App component */}
      <App />
    </Provider>
  </React.StrictMode>,
);
