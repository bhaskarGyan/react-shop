import React from 'react';

import './index.css';

const ShopCartItems = props => {
  const { itemDetails, quantity, size } = props;
  return (
    <section className="shop-cart-item-wrapper">
      <span>
        <img
          className="cart-item-image"
          src={`https://shop.polymer-project.org/es6-unbundled/${
            itemDetails.image
          }`}
          alt={itemDetails.title}
        />
      </span>
      <span className="cart-item-details">
        <span className="cart-item-title">{itemDetails.title}</span>
        <span className="cart-item-quantity">{`quantitiy : ${quantity}`}</span>
        <span className="cart-item-size">{`Size : ${size}`}</span>
        <span className="cart-item-price">{`$${itemDetails.price}`}</span>
      </span>
      <button className="shop-cart-remove-item" type="submit">
        X
      </button>
    </section>
  );
};

export default ShopCartItems;
