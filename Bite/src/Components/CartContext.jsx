import React, { createContext, useState, useEffect } from 'react';
import { db } from '../Firebase/firebase'; // Adjust based on your Firebase setup
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const userId = localStorage.getItem('userId'); // Get the user ID from localStorage

  // Load cart items from Firestore on component mount
  useEffect(() => {
    const fetchCart = async () => {
      if (userId) {
        const cartDocRef = doc(db, 'carts', userId);
        const cartDoc = await getDoc(cartDocRef);
        if (cartDoc.exists()) {
          setCartItems(cartDoc.data().items || []);
        }
      }
    };
    fetchCart();
  }, [userId]);

  // Save cart items to Firestore whenever cartItems change
  useEffect(() => {
    if (userId) {
      const saveCart = async () => {
        await setDoc(doc(db, 'carts', userId), { items: cartItems });
      };
      saveCart();
    }
  }, [cartItems, userId]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
