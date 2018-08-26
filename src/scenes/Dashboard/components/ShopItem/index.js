import React from 'react';
import { Link } from 'react-router-dom';

import ShopImage from '../../../../component/ShopImage';

import './index.css';

const ShopItem = props => {
  const { imgSrc, imgAlt, navigateTo, shopItemHeading } = props;
  return (
    <Link to={navigateTo} className="shop-item-navigation">
      <section className="shop-item-wrapper">
        <ShopImage imgSrc={imgSrc} imgAlt={imgAlt} navigateTo={navigateTo} />
        <h2 className="shop-item-heading">{shopItemHeading}</h2>
        <button type="submit" className="shop-item-button">
          Shop now
        </button>
      </section>
    </Link>
  );
};
export default ShopItem;
