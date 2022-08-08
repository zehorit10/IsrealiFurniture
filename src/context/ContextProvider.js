import React from "react";
import {  Box,  Stack, LinearProgress } from "@mui/material";
import Context from ".";
import useGet from "../api/hooks/get";

function ContextProvider({ children }) {

  const [isAuth, setIsAuth] = React.useState(false);
  const [isEmployee, setIsEmployee] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  const {getData, data, loading, error } = useGet("auth");

  React.useEffect(() => {
    if(!error && data && data.isAuth) {
      setIsAuth(true);
      if( data.role === "employee") {
        setIsEmployee(true);
      } else if( data.role === "admin") {
        setIsEmployee(true);
        setIsAdmin(true);
      }
    } 
  } , [data]);
  
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

  if(loading) {
    return <Stack alignItems="center" justifyContent="center" sx={{ width: 1, height: "100vh" }}>
      <Box sx={{ width: 0.5 }}>
        <LinearProgress />
      </Box>
    </Stack>
  }

  return (
    <Context.Provider value={{
      isAuth,
      setIsAuth,
      isEmployee,
      setIsEmployee,
      isAdmin,
      setIsAdmin,
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