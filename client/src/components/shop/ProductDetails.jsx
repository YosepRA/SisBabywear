import React, { Component } from 'react';
import { ImagesCarousel } from './ImagesCarousel';
import { Label, Input, Button } from 'reactstrap';
import { ProductDetailsDescription } from './ProductDetailsDescription';
import products from '../../fakeProductsData';

const product = products[0];

export class ProductDetails extends Component {
  constructor(props) {
    super();
    this.state = {
      product: {},
      sizes: [],
      colors: [],
      selectedSize: '',
      selectedColor: '',
      selectedVariation: {},
      amount: 1,
    };
  }

  handleSizeChange = ({ target: { value } }) => {
    let selectedVariation = this.findVariation(value);

    this.setState({
      selectedSize: value,
      // Default to the first color of product variation with the selected size.
      selectedColor: selectedVariation.color,
      selectedVariation,
    });
  };

  handleColorChange = ({ target: { value } }) => {
    let selectedVariation = this.findVariation(this.state.selectedSize, value);

    this.setState({ selectedColor: value, selectedVariation });
  };

  handleAmountChange = ({ target: { value } }) =>
    this.setState({ amount: value });

  createSizeOptions() {
    return this.state.sizes.map(size => (
      <option key={size} value={size}>
        {size}
      </option>
    ));
  }

  createColorOptions() {
    let variationOnSize = this.state.product.variations.filter(
      ({ size }) => size === this.state.selectedSize
    );

    return variationOnSize.map(({ color }) => (
      <Label key={color} className="product-info__color-label">
        <Input
          type="radio"
          name="color"
          value={color}
          className="product-info__color-input"
          checked={color === this.state.selectedColor}
          onChange={this.handleColorChange}
        />
        <div
          className="product-info__color-box"
          style={{ backgroundColor: color }}
        ></div>
      </Label>
    ));
  }

  findVariation(size, color) {
    return color
      ? this.state.product.variations.find(
          p => p.size === size && p.color === color
        )
      : this.state.product.variations.find(p => p.size === size);
  }

  render() {
    return (
      <main className="main-container">
        <div className="container">
          <ImagesCarousel
            className="product-images"
            productName={this.state.product.name}
            images={this.state.selectedVariation.images || []}
          />

          <section className="product-info">
            <header className="product-info__header">
              <h1 className="product-info__name">
                {this.state.product.name || ''}
              </h1>
              <h2 className="product-info__price">
                ${this.state.selectedVariation.price || 0}
              </h2>
            </header>
            <div className="product-info__control product-info__size">
              <p className="product-info__label">Size&#58;</p>
              <div className="product-info__choice">
                <Input
                  type="select"
                  name="size"
                  className="product-info__size-input"
                  onChange={this.handleSizeChange}
                  value={this.state.selectedSize}
                >
                  {this.state.product.variations && this.createSizeOptions()}
                </Input>
              </div>
            </div>
            <div className="product-info__control product-info__color">
              <p className="product-info__label">Color&#58;</p>
              <div
                className="product-info__choice"
                onChange={this.handleColorChange}
              >
                {this.state.product.variations && this.createColorOptions()}
              </div>
            </div>
            <div className="product-info__control product-info__add-to-cart">
              <Input
                type="number"
                className="product-info__amount-input"
                min="1"
                max={this.state.selectedVariation.stock}
                value={this.state.amount}
                onChange={this.handleAmountChange}
              />
              <Button
                className="product-info__add-btn"
                disabled={
                  this.state.amount > this.state.selectedVariation.stock
                }
              >
                Add to cart
              </Button>
            </div>
            <div className="product-info__control product-info__stock">
              <p>Stock&#58; {this.state.selectedVariation.stock || 0}</p>
            </div>

            <ProductDetailsDescription />
          </section>
        </div>
      </main>
    );
  }

  componentDidMount() {
    document.body.classList.add('product-details');

    // Populate colors and sizes.
    let sizes = [];
    let colors = [];
    for (const { size, color } of product.variations) {
      if (!sizes.includes(size)) sizes.push(size);
      if (!colors.includes(color)) colors.push(color);
    }

    let selectedSize = sizes[0];
    let selectedVariation = product.variations.find(
      ({ size }) => size === selectedSize
    );

    this.setState({
      product,
      sizes,
      colors,
      selectedSize,
      // Default color based on the first variation with the same size as "selectedSize".
      selectedColor: selectedVariation.color,
      selectedVariation,
    });
  }

  componentWillUnmount() {
    document.body.classList.remove('product-details');
  }
}
