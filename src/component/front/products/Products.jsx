import React from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import "../products/product.css";

const Products = ({ productItems, handelAddProduct }) => {
  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card" key={productItem.id}>
          <div>
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            />
          </div>
          <div>
            <h3 className="product-name">{productItem.name}</h3>
          </div>
          <div className="product-price">
            <span>Rs .</span>
            {productItem.price}
          </div>
          <div>
            <button
              className="product-add-button"
              onClick={() => handelAddProduct(productItem)}
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// PropTypes validation
Products.propTypes = {
  productItems: PropTypes.array.isRequired,
};

export default Products;
