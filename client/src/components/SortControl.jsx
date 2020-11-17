import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export class SortControl extends Component {
  constructor(props) {
    super();
    this.sortKeys = props.sortKeys || [
      {
        key: '-postedDate',
        label: 'Newest',
      },
      {
        key: 'postedDate',
        label: 'Oldest',
      },
      {
        key: 'name',
        label: 'A - Z',
      },
      {
        key: '-name',
        label: 'Z - A',
      },
    ];
  }

  handleChange = ({ target: { value } }) => this.props.handleChange(value);

  createOptions() {
    return this.sortKeys.map(({ key, label }) => (
      <option key={key} value={key}>
        {label}
      </option>
    ));
  }

  render() {
    return (
      <FormGroup className={this.props.className || ''}>
        <Label for="sortKey" className={this.props.labelClassName || ''}>
          Sort by&#58;
        </Label>
        <Input
          type="select"
          name="sortKey"
          id="sortKey"
          className={this.props.inputClassName || ''}
          onChange={this.handleChange}
          value={this.props.selected}
        >
          {this.createOptions()}
        </Input>
      </FormGroup>
    );
  }
}
