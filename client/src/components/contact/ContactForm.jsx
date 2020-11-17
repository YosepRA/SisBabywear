import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class ContactForm extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  }

  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  handleSubmit = event => {
    event.preventDefault();
    console.log('Submit event');
  };

  baseClassName() {
    return this.props.className || 'form';
  }

  render() {
    return (
      <Form className={this.baseClassName() || ''} onSubmit={this.handleSubmit}>
        <FormGroup
          className={`${this.baseClassName()}__group ${this.baseClassName()}__name`}
        >
          <Label className={`${this.baseClassName()}__label`} for="name">
            Name:
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            className={`${this.baseClassName()}__input ${this.baseClassName()}__input--text`}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup
          className={`${this.baseClassName()}__group ${this.baseClassName()}__email`}
        >
          <Label className={`${this.baseClassName()}__label`} for="email">
            Email:
          </Label>
          <Input
            type="email"
            name="email"
            id="email"
            className={`${this.baseClassName()}__input ${this.baseClassName()}__input--email`}
            value={this.state.email}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup
          className={`${this.baseClassName()}__group ${this.baseClassName()}__subject`}
        >
          <Label className={`${this.baseClassName()}__label`} for="subject">
            Subject:
          </Label>
          <Input
            type="text"
            name="subject"
            id="subject"
            className={`${this.baseClassName()}__input ${this.baseClassName()}__input--text`}
            value={this.state.subject}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup
          className={`${this.baseClassName()}__group ${this.baseClassName()}__message`}
        >
          <Label className={`${this.baseClassName()}__label`} for="message">
            Message:
          </Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            className={`${this.baseClassName()}__input ${this.baseClassName()}__input--textarea`}
            value={this.state.message}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button className={`${this.baseClassName()}__send-btn`}>Send</Button>
      </Form>
    );
  }
}
