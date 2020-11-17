import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

export class PageSizeControl extends Component {
  constructor(props) {
    super();
    this.pageSizes = props.pageSizes || ['10', '25', '50', '100'];
    this.state = {
      pageSize: this.pageSizes[0],
    };
  }

  handleChange = ({ target: { value } }) => this.props.handleChange(value);

  createOptions() {
    return this.pageSizes.map(pageSize => (
      <option key={pageSize} value={pageSize}>
        {pageSize}
      </option>
    ));
  }

  render() {
    return (
      <FormGroup className={this.props.className || ''}>
        <Label for="pageSize" className={this.props.labelClassName || ''}>
          Items per page&#58;
        </Label>
        <Input
          type="select"
          name="pageSize"
          id="pageSize"
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
