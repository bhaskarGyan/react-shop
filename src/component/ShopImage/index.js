import React, { Component } from 'react';

import './index.css';

class ShopImage extends Component {
  state = {};

  render() {
    const { imgSrc, imgAlt } = this.props;
    return (
      <figure className="shop-image-wrapper">
        <img alt={imgAlt} src={imgSrc} className="shop-image" />
      </figure>
    );
  }
}

export default ShopImage;
