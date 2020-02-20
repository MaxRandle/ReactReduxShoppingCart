import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = props => {
  const [cart, setCart] = useState(() => {
    const storedData = localStorage.getItem("cart");
    return storedData ? JSON.parse(storedData) : [];
  });

  const addCartItem = cartItem => {
    /// check if item already exists in the cart
    const filteredItems = cart.filter(item => item.name === cartItem.name);
    if (filteredItems.length === 0) {
      setCart([...cart, { ...cartItem, quantity: 1 }]);
    } else {
      const item = filteredItems[0];
      const i = cart.indexOf(item);
      setCart([...cart.slice(0, i), { ...item, quantity: item.quantity + 1 }, ...cart.slice(i + 1)]);
    }
  };

  const deleteCartItem = itemName => {
    setCart([...cart.filter(item => item.name !== itemName)]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addCartItem, deleteCartItem, setCart }}>{props.children}</CartContext.Provider>
  );
};

export default CartContextProvider;

const exampleItem = {
  name: "Sledgehammer",
  price: 125.75,
  quantity: 1
};
