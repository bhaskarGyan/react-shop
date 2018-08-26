import React from 'react';
import { Link } from 'react-router-dom';

import ShopCartItems from './ShopCartItems';

import './index.css';

const ShopCart = props => {
  const { cart } = props;
  let totalPrice = 0;
  if (!cart.length) {
    return <div>Empty Cart</div>;
  }

  let cartLength = 0;
  cart.forEach(val => {
    cartLength += val.quantity;
    totalPrice += val.quantity * val.itemDetails.price;
  });

  return (
    <article>
      <h2 className="shop-cart-heading">Your Cart</h2>
      <div className="shop-cart-items-count">{`(${cartLength} items)`}</div>
      {cart.map(val => (
        <ShopCartItems {...val} />
      ))}
      <div className="shop-cart-summary">
        <span className="shop-cart-summary-price">
          Total Price <span>{`$${totalPrice}`}</span>
        </span>
        <Link to="/checkout" className="shop-cart-checkout">
          Checkout
        </Link>
      </div>
    </article>
  );
};

export default ShopCart;
