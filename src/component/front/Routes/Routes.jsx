// Routes.jsx (or AppRoutes.jsx based on your naming convention)
import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
const AppRoutes = ({
  productItems,
  cartItems,
  handelAddProduct,
  handelRemoveProduct,
  handleCartClear,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Products
            productItems={productItems}
            handelAddProduct={handelAddProduct}
          />
        }
      />
      {/* Add more routes as needed */}
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/cart"
        element={
          <Cart
            cartItems={cartItems}
            handelAddProduct={handelAddProduct}
            handelRemoveProduct={handelRemoveProduct}
            handleCartClear={handleCartClear}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;
