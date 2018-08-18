import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, KeyboardBackspace } from '@material-ui/icons';

import ShopTabs from '../ShopTabs';

import './index.css';

const Header = () => (
  <header className="app-header">
    <section className="app-toolbar">
      <div className="header-back-button">
        <KeyboardBackspace />
      </div>
      <div className="logo">
        <Link to="/">SHOP</Link>
      </div>
      <div className="header-cart">
        <ShoppingCart />
      </div>
    </section>
    <ShopTabs />
  </header>
);

export default Header;
