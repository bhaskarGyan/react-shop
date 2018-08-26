import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, KeyboardBackspace } from '@material-ui/icons';

import GlobalContext from '../../context/Global';
import ShopTabs from '../ShopTabs';

import './index.css';

const Header = () => (
  <header className="app-header">
    <section className="app-toolbar">
      <div className="header-back-button">
        <KeyboardBackspace />
      </div>
      <div className="logo">
        <Link to="/dashboard">SHOP</Link>
      </div>
      <GlobalContext.Consumer>
        {({ cart }) => {
          let cartLength = 0;
          cart.forEach(val => {
            cartLength += val.quantity;
          });
          return (
            <Link to="/cart">
              <div className="header-cart">
                <ShoppingCart />
                <div className={cartLength ? 'header-cart-badge' : 'hide'}>
                  {cartLength}
                </div>
              </div>
            </Link>
          );
        }}
      </GlobalContext.Consumer>
    </section>
    <ShopTabs />
  </header>
);

export default Header;
