import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  toggleCart,
  changeCartAmount,
  deleteCartItem,
  clearCart,
} from './data/ActionCreators';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CartModalItem } from './CartModalItem';

const mapStateToProps = ({ cartOpen, cart }) => ({
  cart,
  cartOpen,
  subtotal: cart.reduce(
    (acc, { variation, amount }) =>
      acc + Number(variation.price) * Number(amount),
    0
  ),
});

const mapDispatchToProps = {
  toggleCart,
  changeCartAmount,
  deleteCartItem,
  clearCart,
};

export const CartModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class CartModal extends Component {
    closeCartModal = () => this.props.toggleCart(false);

    baseClassName() {
      return this.props.className || 'cart-modal';
    }

    showClassName() {
      return this.props.cartOpen ? 'show' : '';
    }

    createListItem() {
      return this.props.cart.map(item => (
        <CartModalItem
          key={item._id}
          className={`${this.baseClassName()}__list-item`}
          item={item}
          changeCartAmount={this.props.changeCartAmount}
          deleteCartItem={this.props.deleteCartItem}
          closeCartModal={this.closeCartModal}
        />
      ));
    }

    render() {
      return (
        <section className={`${this.baseClassName()} ${this.showClassName()}`}>
          <header className={`${this.baseClassName()}__header`}>
            <h1 className={`${this.baseClassName()}__title`}>Your Cart</h1>
            <Button
              close
              className={`${this.baseClassName()}__close-btn`}
              onClick={this.closeCartModal}
            />
          </header>

          <div className={`${this.baseClassName()}__list`}>
            {this.props.cart.length < 1 ? (
              <React.Fragment>
                <h2 className={`${this.baseClassName()}__no-item`}>
                  Your cart is empty.
                </h2>

                <Link
                  to="/shop"
                  className={`${this.baseClassName()}__continue-shopping btn btn-outline-dark`}
                  onClick={this.closeCartModal}
                >
                  Continue shopping
                </Link>
              </React.Fragment>
            ) : (
              this.createListItem()
            )}
          </div>

          <div className={`${this.baseClassName()}__control`}>
            <div className={`${this.baseClassName()}__control-cart`}>
              <Link
                to="/cart"
                className={`${this.baseClassName()}__control-btn ${this.baseClassName()}__control-details btn btn-outline-dark`}
                onClick={this.closeCartModal}
              >
                Cart Details
              </Link>
              <Button
                outline
                color="danger"
                className={`${this.baseClassName()}__control-btn ${this.baseClassName()}__control-clear`}
                onClick={this.props.clearCart}
              >
                Clear Cart
              </Button>
            </div>

            <p className={`${this.baseClassName()}__control-subtotal`}>
              Subtotal&#58; &#36;{this.props.subtotal}
            </p>

            <Button className={`${this.baseClassName()}__control-checkout`}>
              Checkout
            </Button>
          </div>
        </section>
      );
    }
  }
);
