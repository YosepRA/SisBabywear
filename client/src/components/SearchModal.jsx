import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { setSearchKey, toggleSearch } from './data/ActionCreators';
import { SearchForm } from './SearchForm';

const mapStateToProps = ({ searchOpen }) => ({ searchOpen });

const mapDispatchToProps = {
  setSearchKey,
  toggleSearch,
};

const SearchModalConnector = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class SearchModal extends Component {
    closeSearch = () => this.props.toggleSearch(false);

    showClassName() {
      return this.props.searchOpen ? 'show' : '';
    }

    baseClassName() {
      return this.props.className || 'search-modal';
    }

    render() {
      return (
        <section className={`${this.baseClassName()} ${this.showClassName()}`}>
          <Button
            close
            className={`${this.baseClassName()}__close-btn`}
            onClick={this.closeSearch}
          />

          <h1 className={`${this.baseClassName()}__title`}>Search</h1>

          <p className={`${this.baseClassName()}__preface`}>
            Type the name of the product that you&apos;re looking
            for&#46;&#46;&#46;
          </p>

          <SearchForm
            className={`${this.baseClassName()}__form`}
            handleSubmit={this.props.setSearchKey}
            history={this.props.history}
          />
        </section>
      );
    }
  }
);

export const SearchModal = withRouter(SearchModalConnector);
