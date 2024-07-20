import { createContext } from 'react';

export const CartContext = createContext({
  // default data types expected by the context
  items: [],
  addItemToCart: () => {},
});
