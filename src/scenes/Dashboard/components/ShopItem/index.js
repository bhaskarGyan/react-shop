import React from 'react';
import ShopImage from '../../../../component/ShopImage';

import './index.css';

const ShopItem = props => {
  const { imgSrc, imgAlt, navigateTo, shopItemHeading } = props;
  return (
    <section className="shop-item-wrapper">
      <ShopImage imgSrc={imgSrc} imgAlt={imgAlt} navigateTo={navigateTo} />
      <h2 className="shop-item-heading">{shopItemHeading}</h2>
      <button type="submit" className="shop-item-button">
        Shop now
      </button>
    </section>
  );
};
export default ShopItem;
