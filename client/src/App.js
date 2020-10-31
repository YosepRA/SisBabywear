import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AdminSwitch } from './components/admin/AdminSwitch';
import { ShopSwitch } from './components/shop/ShopSwitch';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// FontAwesome library setup.
library.add(fas, fab);

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/admin" component={AdminSwitch} />

            <Route path="/" component={ShopSwitch} />
          </Switch>
        </Router>
      </div>
    );
  }
}
