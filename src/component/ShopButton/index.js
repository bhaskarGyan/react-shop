import React from 'react';

import './index.css';

const ShopButton = props => {
  const { onClickHandler, label, className = '' } = props;
  return (
    <button
      type="submit"
      className={`${className} shop-button`}
      onClick={onClickHandler}
    >
      {label}
    </button>
  );
};

export default ShopButton;
