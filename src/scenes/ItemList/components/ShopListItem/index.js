import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const ShopListItem = props => {
  const { name, title, price, image, currentPath } = props;
  return (
    <li className="shop-list-item-wrapper">
      <Link
        to={`/detail/${currentPath}/${name}`}
        className="shop-list-item-link"
      >
        <section className="shop-list-item">
          <img
            className="shop-list-item-image"
            alt={title}
            src={`https://shop.polymer-project.org/es6-unbundled/${image}`}
          />
          <h3 className="list-item-name">{name}</h3>
          <span className="list-item-price">{`$${price}`}</span>
        </section>
      </Link>
    </li>
  );
};

export default ShopListItem;
