import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export class ToggleLink extends Component {
  render() {
    return (
      <Route path={this.props.to} exact={this.props.exact}>
        {routeProps => {
          const baseClass = this.props.className || 'toggle-link';
          const activeClass = this.props.activeClass || 'active';

          const combinedClass = `${baseClass} ${
            routeProps.match ? activeClass : ''
          }`;

          return (
            <Link to={this.props.to} className={combinedClass}>
              {this.props.children}
            </Link>
          );
        }}
      </Route>
    );
  }
}
