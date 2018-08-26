import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

class ShopListItem extends Component {
  state = {
    imageLoaded: false,
  };

  onImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  render() {
    const { name, title, price, image, currentPath } = this.props;
    const { imageLoaded } = this.state;

    return (
      <li className="shop-list-item-wrapper">
        <Link
          to={`/detail/${currentPath}/${name}`}
          className="shop-list-item-link"
        >
          <section className="shop-list-item">
            <figure
              className={
                imageLoaded
                  ? 'list-item-image-wrapper list-item-image-wrapper-padding-reset'
                  : 'list-item-image-wrapper'
              }
            >
              <img
                className={
                  imageLoaded
                    ? 'shop-list-item-image shop-list-item-loaded'
                    : 'shop-list-item-image'
                }
                alt={title}
                src={`https://shop.polymer-project.org/es6-unbundled/${image}`}
                onLoad={this.onImageLoad}
              />
            </figure>

            <h3 className="list-item-name">{title}</h3>
            <span className="list-item-price">{`$${price}`}</span>
          </section>
        </Link>
      </li>
    );
  }
}

export default ShopListItem;
