import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    // Calculate the total price based on the count
    // You can modify this calculation according to your needs
    const calculateTotalPrice = () => {
      const bookPrice = parseFloat(book.price);
      const totalPrice = bookPrice * count;
      return totalPrice.toFixed(2);
    };

    // Update the total price whenever the count changes
    setTotalPrice(calculateTotalPrice());
  }, [count]);

  return (
    <CartContext.Provider value={{ count, totalPrice, setCount }}>
      {children}
    </CartContext.Provider>
  );
};
