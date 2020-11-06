import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';

export class ImagesCarousel extends Component {
  constructor(props) {
    super();
    this.state = {
      activeIndex: 0,
      animating: false,
    };
  }

  setActiveIndex = nextIndex => this.setState({ activeIndex: nextIndex });

  setAnimating = animatingState => this.setState({ animating: animatingState });

  next = () => {
    if (this.state.animating) return;
    let nextIndex =
      this.state.activeIndex === this.props.images.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setActiveIndex(nextIndex);
  };

  previous = () => {
    if (this.state.animating) return;
    let prevIndex =
      this.state.activeIndex === 0
        ? this.props.images.length - 1
        : this.state.activeIndex - 1;
    this.setActiveIndex(prevIndex);
  };

  goToIndex = newIndex => {
    if (this.state.animating) return;
    this.setActiveIndex(newIndex);
  };

  createSlides() {
    let keyCounter = 100;
    return this.props.images.map(imgLink => (
      <CarouselItem
        key={keyCounter++}
        onExiting={() => this.setAnimating(true)}
        onExited={() => this.setAnimating(false)}
      >
        <img
          src={imgLink}
          alt={this.props.productName}
          className="carousel-image"
        />
      </CarouselItem>
    ));
  }

  render() {
    return (
      <Carousel
        className={this.props.className || ''}
        activeIndex={this.state.activeIndex}
        next={this.next}
        previous={this.previous}
        interval={false}
      >
        <CarouselIndicators
          items={this.props.images}
          activeIndex={this.state.activeIndex}
          onClickHandler={this.goToIndex}
        />
        {this.createSlides()}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
          className={this.props.previousControlClassName || ''}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
          className={this.props.nextControlClassName || ''}
        />
      </Carousel>
    );
  }
}
