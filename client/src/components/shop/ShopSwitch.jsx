import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TopNavbar } from '../TopNavbar';
import { Footer } from '../Footer';
import { Home } from '../Home';
import { Shop } from './Shop';
import { ProductDetails } from './ProductDetails';
import { Login } from '../user/Login';
import { Register } from '../user/Register';
import { Contact } from '../Contact';

export class ShopSwitch extends Component {
  render() {
    return (
      <React.Fragment>
        <TopNavbar />

        <Switch>
          <Redirect from="/shop" to="/shop/1" exact />

          <Route path="/" exact>
            <Home />
          </Route>

          <Route
            path="/shop/:id/:name"
            render={routeProps => <ProductDetails {...routeProps} />}
          />

          <Route path="/shop/:page">
            <Shop />
          </Route>

          <Route path="/contact">
            <Contact />
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
  }

  componentWillUnmount() {
    document.body.classList.remove('shop');
  }
}
