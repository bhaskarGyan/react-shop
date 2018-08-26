import React, { Component } from 'react';

import './index.css';

class ShopImage extends Component {
  state = {
    isImageLoaded: false,
  };

  imageLoaded = () => {
    this.setState({ isImageLoaded: true });
  };

  render() {
    const { imgSrc, imgAlt } = this.props;
    const imgClassName = this.state.isImageLoaded
      ? 'shop-image shop-image--loaded'
      : 'shop-image';
    return (
      <figure className="shop-image-wrapper">
        <img
          alt={imgAlt}
          src={imgSrc}
          className={imgClassName}
          onLoad={this.imageLoaded}
        />
      </figure>
    );
  }
}

export default ShopImage;
