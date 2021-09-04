import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'

const StoreContext = createContext();
const { Provider } = StoreContext;

const storedCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({
    products: [],
    cart: storedCart,
    cartOpen: false,
    categories: [],
    currentCategory: '',
    user: JSON.parse(localStorage.getItem("authuser")) || {}
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };