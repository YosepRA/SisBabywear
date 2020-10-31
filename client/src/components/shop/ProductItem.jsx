import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';

export class ProductItem extends Component {
  getPriceRange() {
    const { variations } = this.props.product;
    let lowest = variations.reduce(
      (a, { price }) => (a > Number(price) ? price : a),
      Infinity
    );
    let highest = variations.reduce(
      (a, { price }) => (a > Number(price) ? a : price),
      -Infinity
    );
    return `$${lowest} - $${highest}`;
  }

  render() {
    const { _id, name, variations } = this.props.product;
    const imageSample = variations[0].images[0];

    return (
      <article className="product">
        <section className="product__image">
          <Link
            to={`/shop/${_id}/${slugify(name, '_')}`}
            className="product__title"
          >
            <img src={imageSample} alt={name} />
          </Link>
        </section>

        <section className="product__info">
          <Link
            to={`/shop/${_id}/${slugify(name, '_')}`}
            className="product__title"
          >
            {name}
          </Link>

          <p className="product__price">{this.getPriceRange()}</p>
        </section>
      </article>
    );
  }
}
