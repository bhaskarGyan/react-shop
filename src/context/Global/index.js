import React from 'react';

const GlobalContext = React.createContext({
  cart: [],
  updateCart: () => {},
});

export default GlobalContext;
