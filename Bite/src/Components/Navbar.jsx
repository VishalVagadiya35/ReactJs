import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Account from './Account';
import Error from './Error';
import AddProduct from './AddProduct';
import SingleProduct from './SingleProduct';
import Shop from './Shop';
import Home from './Home';
import About from './About';
import { CartProvider } from './CartContext';
import { AuthProvider } from './AuthContext'; // Import AuthProvider
import Impect from './Impect';

function Navbar() {
  return (
    <AuthProvider> {/* Wrap everything with AuthProvider */}
      <CartProvider> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/impact" element={<Impect />} />
          <Route path="/about" element={<About />} />
          <Route path="/account" element={<Account />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default Navbar;
