import { createStore } from "redux";

const initialState = {
  cart: [],
  cartOpen: false
};

const reducer = (state, action) => {
  const { type, cartItem, cartItemName, ...others } = action;
  switch (type) {
    case "TOGGLE_CART":
      return { ...state, cartOpen: !state.cartOpen };

    case "ADD_TO_CART":
      const filteredItems = state.filter(item => item.name === cartItem.name);
      if (filteredItems.length === 0) {
        return { ...state, cart: [...state.cart, { ...cartItem, quantity: 1 }] };
      } else {
        const item = filteredItems[0];
        const i = state.cart.indexOf(item);
        return {
          ...state,
          cart: [...state.cart.slice(0, i), { ...item, quantity: item.quantity + 1 }, ...state.cart.slice(i + 1)]
        };
      }

    case "DELETE_FROM_CART":
      return { ...state, cart: [...state.cart.filter(item => item.name !== cartItemName)] };

    default:
      return state;
  }
};

export const store = createStore(reducer, initialState);

export const addToCartAction = cartItem => ({
  type: "ADD_TO_CART",
  cartItem
});

export const deleteFromCartAction = cartItemName => ({
  type: "DELETE_FROM_CART",
  cartItemName
});

export const toggleCartAction = () => ({
  type: "TOGGLE_CART"
});
