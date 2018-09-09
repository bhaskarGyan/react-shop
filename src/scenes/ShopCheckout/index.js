import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { Redirect } from 'react-router-dom';

import './index.css';
import ShopButton from '../../component/ShopButton';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto',
    maxWidth: 960,
  },
  textField: {
    width: '100%',
  },
  menu: {
    width: 200,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
    width: '100%',
    marginTop: 10,
    height: 52,
    display: 'flex',
    flexDirection: 'row',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class ShopCheckout extends Component {
  state = {
    redirectToDashboard: false,
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  placeOrder = () => {
    this.setState({ redirectToDashboard: true }, () => {
      this.props.checkoutSuccess();
    });
    // ;
  };

  render() {
    const { classes, cart } = this.props;
    let totalPrice = 0;

    if (this.state.redirectToDashboard) {
      return <Redirect to="/dashboard" />;
    }

    if (!cart.length) {
      return <div>Cart is empty</div>;
    }

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <header className="subsection">
          <h1>Checkout</h1>
          <span>Shop is a demo app - form data will not be sent</span>
        </header>
        <div className="shop-checkout-details-left">
          <section className="shop-checkout-section-wrapper">
            <h2 className="shop-checkout-details-heading">
              Account Information
            </h2>
            <TextField
              id="email"
              label="Email"
              className={classes.textField}
              value={this.state.email}
              onChange={this.handleChange('email')}
              margin="normal"
              type="email"
            />
            <TextField
              id="phoneNumber"
              label="Phone Number"
              className={classes.textField}
              value={this.state.phoneNumber}
              onChange={this.handleChange('phoneNumber')}
              margin="normal"
              type="tel"
            />
          </section>
          <section className="shop-checkout-section-wrapper">
            <h2 className="shop-checkout-details-heading">Shipping Address</h2>
            <TextField
              id="address"
              label="Address"
              className={classes.textField}
              value={this.state.address}
              onChange={this.handleChange('address')}
              margin="normal"
            />
            <TextField
              id="city"
              label="City"
              className={classes.textField}
              value={this.state.city}
              onChange={this.handleChange('city')}
              margin="normal"
            />
            <TextField
              id="state"
              label="State/ Province"
              className={classes.textField}
              value={this.state.state}
              onChange={this.handleChange('state')}
              margin="normal"
            />
            <TextField
              id="zipCode"
              label="Zip/ Postal code"
              className={classes.textField}
              value={this.state.zipCode}
              onChange={this.handleChange('zipCode')}
              margin="normal"
            />
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="country">Country</InputLabel>
              <Select
                value={this.state.country}
                onChange={this.handleChange('country')}
                inputProps={{
                  name: 'country',
                  id: 'country',
                }}
              >
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
              </Select>
            </FormControl>
          </section>
        </div>
        <div className="shop-checkout-details-right">
          <section className="shop-checkout-section-wrapper">
            <h2 className="shop-checkout-details-heading">Payment Method</h2>
            <TextField
              id="cardHolder"
              label="Cardholder Name"
              className={classes.textField}
              value={this.state.cardHolder}
              onChange={this.handleChange('cardHolder')}
              margin="normal"
              type="text"
            />
            <TextField
              id="cardNumber"
              label="Card Number"
              className={classes.textField}
              value={this.state.cardNumber}
              onChange={this.handleChange('cardNumber')}
              margin="normal"
              type="tel"
            />
            <div className="shop-checkout-card-expiry">
              <h3 className="shop-checkout-card-expiry-heading">Expiry</h3>
              <FormControl className={classes.formControl}>
                <Select
                  value={this.state.expiryMonth}
                  onChange={this.handleChange('expiryMonth')}
                  inputProps={{
                    name: 'expiryMonth',
                    id: 'expiryMonth',
                  }}
                  className="checkout-card-expiry-dropdown"
                >
                  <MenuItem value="Jan">Jan</MenuItem>
                  <MenuItem value="Feb">Feb</MenuItem>
                  <MenuItem value="Mar">Mar</MenuItem>
                  <MenuItem value="Apr">Apr</MenuItem>
                  <MenuItem value="May">May</MenuItem>
                  <MenuItem value="Jun">Jun</MenuItem>
                  <MenuItem value="Jul">Jul</MenuItem>
                  <MenuItem value="Aug">Aug</MenuItem>
                  <MenuItem value="Sep">Sep</MenuItem>
                  <MenuItem value="Oct">Oct</MenuItem>
                  <MenuItem value="Nov">Nov</MenuItem>
                  <MenuItem value="Dec">Dec</MenuItem>
                </Select>
                <Select
                  value={this.state.expiryYear}
                  onChange={this.handleChange('expiryYear')}
                  inputProps={{
                    name: 'expiryYear',
                    id: 'expiryYear',
                  }}
                  className="checkout-card-expiry-dropdown"
                >
                  <MenuItem value="2018">2018</MenuItem>
                  <MenuItem value="2019">2019</MenuItem>
                  <MenuItem value="2020">2020</MenuItem>
                  <MenuItem value="2021">2021</MenuItem>
                </Select>
                <TextField
                  id="cardCvv"
                  label="CVV"
                  className={`${classes.textField} checkout-card-expiry-cvv`}
                  value={this.state.cardCvv}
                  onChange={this.handleChange('cardCvv')}
                  margin="normal"
                  type="tel"
                />
              </FormControl>
            </div>
          </section>
          <section className="shop-checkout-section-wrapper">
            <h2 className="shop-checkout-details-heading">Order Summary</h2>
            <div className="shop-checkout-item-details">
              {
                <div>
                  {cart.map(val => {
                    const itemPrice = val.quantity * val.itemDetails.price;
                    totalPrice += itemPrice;
                    return (
                      <div
                        key={val.itemDetails.title}
                        className="shop-checkout-item"
                      >
                        <span>{val.itemDetails.title}</span>
                        <span>{`$${itemPrice}`}</span>
                      </div>
                    );
                  })}
                  <div className="shop-checkout-total-price">
                    <span>Total</span>
                    <span> {`$${totalPrice}`}</span>
                  </div>
                  <ShopButton
                    label="Place order"
                    onClickHandler={this.placeOrder}
                  />
                </div>
              }
            </div>
          </section>
        </div>
      </form>
    );
  }
}

export default withStyles(styles)(ShopCheckout);
