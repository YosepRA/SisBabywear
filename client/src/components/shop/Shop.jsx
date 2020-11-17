import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SortControl } from '../SortControl';
import { PageSizeControl } from '../PageSizeControl';
import { ProductItem } from './ProductItem';
import { Pagination } from '../Pagination';
import products from '../../fakeProductsData';
import { setSortKey, setPageSize } from '../data/ActionCreators';
import { sortKeys, pageSizes } from '../data/initialState';

const mapStateToProps = ({ searchKey, searchAmount, sortKey, pageSize }) => ({
  searchKey,
  searchAmount,
  sortKey,
  pageSize,
});

const mapDispatchToProps = { setSortKey, setPageSize };

export const Shop = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class Shop extends Component {
    createProducts() {
      return products.map(p => <ProductItem key={p.name} product={p} />);
    }

    render() {
      return (
        <main className="main-container">
          <div className="container">
            {this.props.searchKey && (
              <section className="search-result-message">
                <p>
                  Search result for{' '}
                  <span className="search-result-message__query">
                    &quot;{this.props.searchKey}&quot;
                  </span>{' '}
                  <span className="search-result-message__amount">
                    &#40;Found&#58; {this.props.searchAmount}&#41;
                  </span>
                </p>
              </section>
            )}

            <section className="controls">
              <SortControl
                className="controls__item controls__item--sort"
                labelClassName="controls__label"
                inputClassName="controls__input"
                sortKeys={sortKeys}
                selected={this.props.sortKey}
                handleChange={this.props.setSortKey}
              />
              <PageSizeControl
                className="controls__item controls__item--page-size"
                labelClassName="controls__label"
                inputClassName="controls__input"
                pageSizes={pageSizes}
                selected={this.props.pageSize}
                handleChange={this.props.setPageSize}
              />
            </section>

            <section className="products">{this.createProducts()}</section>

            <Pagination baseUrl="/shop" />
          </div>
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
);
