import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class CartModalItem extends Component {
  handleAmountChange = ({ target: { value } }) => {
    const { _id, variation } = this.props.item;
    this.props.changeCartAmount(_id, variation.id, value);
  };

  handleItemDelete = () => {
    const { _id, variation } = this.props.item;
    this.props.deleteCartItem(_id, variation.id);
  };

  baseClassName() {
    return this.props.className || 'cart-item';
  }

  render() {
    const {
      _id,
      name,
      variation: { size, color, price, images, stock },
      amount,
    } = this.props.item;

    return (
      <article className={this.baseClassName()}>
        <div className={`${this.baseClassName()}__image`}>
          <img src={images[0]} alt={name} />

          <Button
            className={`${this.baseClassName()}__delete-btn`}
            onClick={this.handleItemDelete}
          >
            <FontAwesomeIcon icon={['fas', 'times-circle']} />
          </Button>
        </div>

        <div className={`${this.baseClassName()}__info`}>
          <Link
            to={`/shop/${_id}/${slugify(name, '_')}`}
            className={`${this.baseClassName()}__name`}
            onClick={this.props.closeCartModal}
          >
            {name}
          </Link>

          <p
            className={`${this.baseClassName()}__info-item ${this.baseClassName()}__info-item--price`}
          >
            <span className={`${this.baseClassName()}__info-label`}>
              Price&#58;
            </span>{' '}
            <span className={`${this.baseClassName()}__info-value`}>
              &#36;{price}
            </span>
          </p>

          <p
            className={`${this.baseClassName()}__info-item ${this.baseClassName()}__info-item--qty`}
          >
            <Label className={`${this.baseClassName()}__info-label`}>
              Qty&#58;{' '}
              <Input
                type="number"
                className={`${this.baseClassName()}__info-value`}
                min="1"
                max={stock}
                value={amount}
                onChange={this.handleAmountChange}
              />
            </Label>
          </p>

          <p
            className={`${this.baseClassName()}__info-item ${this.baseClassName()}__info-item--size`}
          >
            <span className={`${this.baseClassName()}__info-label`}>
              Size&#58;
            </span>{' '}
            <span className={`${this.baseClassName()}__info-value`}>
              {size}
            </span>
          </p>

          <p
            className={`${this.baseClassName()}__info-item ${this.baseClassName()}__info-item--color`}
          >
            <span className={`${this.baseClassName()}__info-label`}>
              Color&#58;
            </span>{' '}
            <span
              className={`${this.baseClassName()}__info-value`}
              style={{ backgroundColor: color }}
            ></span>
          </p>
        </div>
      </article>
    );
  }
}
