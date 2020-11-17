import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      searchKey: '',
    };
  }

  handleSearchChange = ({ target: { value } }) =>
    this.setState({ searchKey: value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.searchKey);
  };

  baseClassName() {
    return this.props.className || 'search-form';
  }

  render() {
    return (
      <Form className={`${this.baseClassName()}`} onSubmit={this.handleSubmit}>
        <Input
          type="text"
          className={`${this.baseClassName()}__search-input`}
          value={this.state.searchKey}
          onChange={this.handleSearchChange}
          placeholder="Search..."
        />

        <Button className={`${this.baseClassName()}__search-btn`}>
          <FontAwesomeIcon icon={['fas', 'search']} />
        </Button>
      </Form>
    );
  }
}
