import React, { Component } from 'react';
import { Button, Collapse } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class ProductDetailsDescription extends Component {
  constructor(props) {
    super();

    this.state = {
      isDescriptionOpen: true,
    };
  }

  descriptionToggle = () =>
    this.setState({ isDescriptionOpen: !this.state.isDescriptionOpen });

  render() {
    return (
      <div className="product-info__control product-info__description">
        <Button
          className="product-info__description-toggle"
          onClick={this.descriptionToggle}
        >
          <span className="product-info__description-label">Description</span>
          <span className="product-info__description-caret">
            <FontAwesomeIcon icon={['fas', 'angle-down']} />
          </span>
        </Button>

        <Collapse
          className="product-info__description-body"
          isOpen={this.state.isDescriptionOpen}
        >
          <h3>Cavania Brush Complex</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            assumenda!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            quod accusamus consectetur maxime non, perferendis autem placeat
            harum doloribus perspiciatis quasi, quos accusantium? Commodi vero
            sint nemo assumenda obcaecati aperiam.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
            iste, sunt numquam odio quos fuga iusto nobis reprehenderit!
          </p>
        </Collapse>
      </div>
    );
  }
}
