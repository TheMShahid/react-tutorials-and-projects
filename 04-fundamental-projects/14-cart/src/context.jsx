import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "./reducer";
// import cartItems from "./data";

const url = "https://www.course-api.com/react-useReducer-cart-project";

import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  DISPLAY_ITEMS,
  LOADING,
} from "./actions";
import { getTotal } from "./utils";
import { useEffect } from "react";

const AppContext = createContext();

const initialState = {
  loading: false,
  // cart: new Map(cartItems.map((cartItem) => [cartItem.id, cartItem])),
  cart: new Map(), // data coming from API
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotal(state.cart);

  const clearCart = () => {
    const action = { type: CLEAR_CART };
    dispatch(action);
  };

  const removeItem = (id) => {
    const action = { type: REMOVE, payload: { id } };
    dispatch(action);
  };

  const increase = (id) => {
    const action = { type: INCREASE, payload: { id } };
    dispatch(action);
  };

  const decrease = (id) => {
    const action = { type: DECREASE, payload: { id } };
    dispatch(action);
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const resp = await fetch(url);
    const cart = await resp.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
    // console.log(cart);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
