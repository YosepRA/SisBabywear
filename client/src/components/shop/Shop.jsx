import React, { Component } from 'react';
import { SortControl } from '../SortControl';
import { PageSizeControl } from '../PageSizeControl';
import { ProductItem } from './ProductItem';
import { Pagination } from '../Pagination';
import products from '../../fakeProductsData';

export class Shop extends Component {
  createProducts() {
    return products.map(p => <ProductItem key={p.name} product={p} />);
  }

  render() {
    return (
      <main className="main-container container">
        <section className="search-result-message">
          <p>
            Search result for{' '}
            <span className="search-result-message__query">
              &quot;Orange Ocelots&quot;
            </span>{' '}
            <span className="search-result-message__amount">
              &#40;Found&#58; 32&#41;
            </span>
          </p>
        </section>

        <section className="controls">
          <SortControl
            className="controls__item controls__item--sort"
            labelClassName="controls__label"
            inputClassName="controls__input"
          />
          <PageSizeControl
            className="controls__item controls__item--page-size"
            labelClassName="controls__label"
            inputClassName="controls__input"
          />
        </section>

        <section className="products">{this.createProducts()}</section>

        <Pagination baseUrl="/shop" />
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('shop-index');
  }

  componentWillUnmount() {
    document.body.classList.remove('shop-index');
  }
}
