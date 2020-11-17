import React, { Component } from 'react';
import { connect } from 'react-redux';
import { closeWidgets } from './data/ActionCreators';

const mapStateToProps = ({ searchOpen, cartOpen }) => ({
  searchOpen,
  cartOpen,
});

const mapDispatchToProps = {
  closeWidgets,
};

export const DarkOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class DarkOverlay extends Component {
    showClassName() {
      return this.props.searchOpen || this.props.cartOpen ? 'show' : '';
    }

    render() {
      return (
        <div
          className={`dark-overlay ${this.showClassName()}`}
          onClick={this.props.closeWidgets}
        ></div>
      );
    }
  }
);
