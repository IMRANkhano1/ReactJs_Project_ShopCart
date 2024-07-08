// App.jsx
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/front/Header/Header";
import AppRoutes from "./component/front/Routes/Routes"; // Adjust the import path as per your file structure
import data from "./component/back/data/data";

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const handelAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      console.log("new");
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const handelRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  const handleCartClear = () => {
    setCartItems([]);
  };
  return (
    <Router>
      <div className="container">
        <Header cartItems={cartItems} />
        <AppRoutes
          productItems={productItems}
          cartItems={cartItems}
          handelAddProduct={handelAddProduct}
          handelRemoveProduct={handelRemoveProduct}
          handleCartClear={handleCartClear}
        />
      </div>
    </Router>
  );
};

export default App;
