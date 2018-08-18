import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const ShopTabs = () => (
  <section className="app-navigation">
    <ul className="app-navigation-list">
      <li className="app-navigation-list-item">
        <Link to="/list/mens_outerwear"> Men&apos;s Outerwear</Link>
      </li>
      <li className="app-navigation-list-item">
        <Link to="/list/ladies_outerwear"> Ladies Outerwear</Link>
      </li>
      <li className="app-navigation-list-item">
        <Link to="/list/mens_tshirt"> Men&apos;s Tshirt</Link>
      </li>
      <li className="app-navigation-list-item">
        <Link to="/list/ladies_tshirt"> Ladies Tshirt</Link>
      </li>
    </ul>
  </section>
);

export default ShopTabs;
