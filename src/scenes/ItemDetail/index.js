import React, { Component } from 'react';
import _ from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import ShopButton from '../../component/ShopButton';
import { ItemListData } from '../../data';

import './index.css';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
    width: '100%',
    marginTop: 10,
    height: 52,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class ItemDetail extends Component {
  state = {
    itemDetails: {},
    size: 'M',
    quantity: 1,
  };

  componentDidMount = () => {
    window.scrollTo(0, 0);
    const { currentItem, currentList } = this.props.match.params;
    const currentItemList = _.filter(ItemListData, { listType: currentList });
    const itemDetails = _.filter(currentItemList[0].listData, {
      name: currentItem,
    });
    this.setState({ itemDetails: itemDetails[0] });
  };

  onImageLoad = () => {
    this.setState({ imageLoaded: true });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  updateCart = () => {
    const { itemDetails, size, quantity } = JSON.parse(
      JSON.stringify(this.state)
    );
    const itemToAdd = {
      itemDetails,
      size,
      quantity,
    };
    this.props.updateCart(itemToAdd);
  };

  render() {
    const { imageLoaded, itemDetails } = this.state;
    const { name, price, description, largeImage } = itemDetails;
    const { classes } = this.props;
    return (
      <article className="item-details-wrappper">
        <section className="item-img">
          <img
            src={`https://shop.polymer-project.org/es6-unbundled/${largeImage}`}
            alt={name}
            onLoad={this.onImageLoad}
            className={imageLoaded ? 'item-img-loaded' : 'item-img-hidden'}
          />
        </section>
        <section className="item-details">
          <h2 className="item-details-heading">{name}</h2>
          <div className="item-details-price">{`$${price}`}</div>
          <div className="item-details-picker">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="picker-size">Size</InputLabel>
              <Select
                value={this.state.size}
                onChange={this.handleChange}
                inputProps={{
                  name: 'size',
                  id: 'picker-size',
                }}
              >
                <MenuItem value="XS">XS</MenuItem>
                <MenuItem value="S">S</MenuItem>
                <MenuItem value="M">M</MenuItem>
                <MenuItem value="L">L</MenuItem>
                <MenuItem value="XL">XL</MenuItem>{' '}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="picker-quantity">Quantity</InputLabel>
              <Select
                value={this.state.quantity}
                onChange={this.handleChange}
                inputProps={{
                  name: 'quantity',
                  id: 'picker-quantity',
                }}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </div>
          <section className="item-details-description">
            <h3 className="item-details-description-heading">Description</h3>
            <div className="item-details-description-content">
              {description}
            </div>
          </section>
          <ShopButton onClickHandler={this.updateCart} label="Add to Cart" />
        </section>
      </article>
    );
  }
}

export default withStyles(styles)(ItemDetail);
