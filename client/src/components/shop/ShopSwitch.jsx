import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { TopNavbar } from '../TopNavbar';
import { Footer } from '../Footer';
import { Home } from '../Home';
import { Shop } from './Shop';
import { ProductDetails } from './ProductDetails';
import { Cart } from '../Cart';
import { Login } from '../user/Login';
import { Register } from '../user/Register';
import { Contact } from '../contact/Contact';
import { SearchModal } from '../SearchModal';
import { CartModal } from '../CartModal';
import { DarkOverlay } from '../DarkOverlay';

const mapStateToProps = ({ searchOpen, cartOpen }) => ({
  searchOpen,
  cartOpen,
});

export const ShopSwitch = connect(mapStateToProps)(
  class ShopSwitch extends Component {
    render() {
      return (
        <React.Fragment>
          <TopNavbar />
          <SearchModal />
          <CartModal />
          <DarkOverlay />

          <Switch>
            <Redirect from="/shop" to="/shop/1" exact />

            <Route path="/" exact>
              <Home />
            </Route>

            <Route
              path="/shop/:id/:name"
              render={routeProps => <ProductDetails {...routeProps} />}
            />

            <Route
              path="/shop/:page?"
              render={routeProps => <Shop {...routeProps} />}
            />

            <Route path="/contact">
              <Contact />
            </Route>

            <Route path="/cart">
              <Cart />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Redirect to="/" />
          </Switch>

          <Footer />
        </React.Fragment>
      );
    }

    componentDidMount() {
      document.body.classList.add('shop');

      if (this.props.searchOpen || this.props.cartOpen)
        document.body.classList.add('disable-scroll');
      else document.body.classList.remove('disable-scroll');
    }

    componentDidUpdate() {
      document.body.classList.add('shop');

      if (this.props.searchOpen || this.props.cartOpen)
        document.body.classList.add('disable-scroll');
      else document.body.classList.remove('disable-scroll');
    }

    componentWillUnmount() {
      document.body.classList.remove('shop');
    }
  }
);
