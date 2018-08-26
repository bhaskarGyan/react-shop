import React from 'react';
import ShopCartItems from './ShopCartItems';

import './index.css';

const ShopCart = props => {
  const { cart } = props;

  if (!cart.length) {
    return <div>Empty Cart</div>;
  }

  let cartLength = 0;
  cart.forEach(val => {
    cartLength += val.quantity;
  });

  return (
    <article>
      <h2 className="shop-cart-heading">Your Cart</h2>
      <div className="shop-cart-items-count">{`(${cartLength} items)`}</div>
      {cart.map(val => (
        <ShopCartItems {...val} updateCart={this.updateCart} />
      ))}
    </article>
  );
};

export default ShopCart;
