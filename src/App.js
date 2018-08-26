/*eslint-disable */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalContext from './context/Global';
import Header from './component/Header';
import Dashboard from './scenes/Dashboard';
import ItemList from './scenes/ItemList';

import './App.css';
import ItemDetail from './scenes/ItemDetail';
import ShopCart from './scenes/ShopCart';

class App extends Component {
  state = {
    cart: [],
    updateCart: value => {
      let currentCart = JSON.parse(JSON.stringify(this.state.cart));
      let isUpdatingItem;
      currentCart = currentCart.map(val => {
        if (
          val.itemDetails.name === value.itemDetails.name &&
          val.size === value.size
        ) {
          val.quantity += value.quantity;
          isUpdatingItem = true;
        }
        return val;
      });
      if (!isUpdatingItem) {
        currentCart.push(value);
      }
      this.setState(
        () => {
          return { cart: currentCart };
        },
        () => {
          window.localStorage.setItem(
            'shopCart',
            JSON.stringify(this.state.cart)
          );
        }
      );
    },
  };

  componentDidMount = () => {
    const localStorageCart = window.localStorage.getItem('shopCart');
    if (localStorageCart) {
      this.setState({ cart: JSON.parse(localStorageCart) });
    }
  };

  render() {
    const Layout = ({ match }) => (
      <GlobalContext.Provider value={this.state}>
        <Header />

        <Route path={`${match.path}dashboard`} exact component={Dashboard} />
        <Route
          path={`${match.path}list/:listType`}
          exact
          render={props => (
            <ItemList key={props.match.params.listType} {...props} />
          )}
        />
        <Route
          path={`${match.path}detail/:currentList/:currentItem`}
          exact
          render={props => (
            <GlobalContext.Consumer key={props.match.params.currentItem}>
              {({ updateCart }) => (
                <ItemDetail updateCart={updateCart} {...props} />
              )}
            </GlobalContext.Consumer>
          )}
        />
        <Route
          path={`${match.path}cart`}
          render={props => (
            <GlobalContext.Consumer>
              {({ cart, updateCart }) => (
                <ShopCart cart={cart} updateCart={updateCart} {...props} />
              )}
            </GlobalContext.Consumer>
          )}
        />
      </GlobalContext.Provider>
    );
    return (
      <div className="app-root">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Layout} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
