import React from "react";
import Context from ".";

function ContextProvider({ children }) {
  const [cart, setCart] = React.useState([]);
  const [cartTotal, setCartTotal] = React.useState(0);
  const [cartQuantity, setCartQuantity] = React.useState(0);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    setCartTotal(cartTotal + (product.price * product.quantity));
    setCartQuantity(cartQuantity + 1);
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.sku !== product.sku);
    setCart(newCart);
    setCartTotal(cartTotal - product.price);
    setCartQuantity(cartQuantity - 1);
  }

  const clearCart = () => {
    setCart([]);
    setCartTotal(0);
    setCartQuantity(0);
  }

  return (
    <Context.Provider value={{
      cart,
      cartTotal,
      cartQuantity,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </Context.Provider>
  );
}
export default ContextProvider;