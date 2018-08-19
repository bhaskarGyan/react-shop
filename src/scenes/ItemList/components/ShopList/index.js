import React from 'react';

import ShopListItem from '../ShopListItem';
import './index.css';

const ShopList = props => {
  const { listData, title, currentPath } = props;
  return (
    <article className="shop-list-wrapper">
      <header>
        <h2>{title}</h2>
        <span className="shop-list-item-length">
          {`(${listData.length} items)`}
        </span>
      </header>
      <ul className="shop-list">
        {listData.map(val => (
          <ShopListItem currentPath={currentPath} {...val} />
        ))}
      </ul>
    </article>
  );
};
export default ShopList;
