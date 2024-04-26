import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AuthContextProvider } from './context/authContext';
import { CartProvider, ProductProvider } from './context/appContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ProductProvider>
      <CartProvider>
      <App/>
      </CartProvider>
      </ProductProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
