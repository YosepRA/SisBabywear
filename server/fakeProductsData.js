/* 
  Product data structure:
  {
    name: 'Classy Joe',
    variations: [
      {
        id: 100,
        size: 'S',
        color: '#696c86',
        stock: 99,
        images: [
          'http://placeimg.com/640/480/fashion',
          'http://placeimg.com/640/480/fashion',
          'http://placeimg.com/640/480/fashion',
        ],
        price: '37.00',
      },
      {
        id: 101,
        size: 'S',
        color: '#d82601',
        stock: 68,
        images: [
          'http://placeimg.com/640/480/fashion',
          'http://placeimg.com/640/480/fashion',
        ],
        price: '18.00',
      }
    ],
  }; 
*/

const faker = require('faker');
const { randomNum } = require('./helpers');

faker.seed(100);

const sizes = ['S', 'M', 'L', 'XL'];
const products = generateProducts(103);

function createVariations() {
  let variations = [];
  let id = 100;

  for (let i = 0; i < sizes.length; i++) {
    let colors = generateColors(randomNum(1, 5));

    for (const color of colors) {
      let newVariation = {
        id: id++,
        size: sizes[i],
        color,
        stock: randomNum(1, 100),
        images: generateImages(randomNum(1, 5)),
        price: faker.commerce.price(10, 50),
      };
      variations.push(newVariation);
    }
  }

  return variations;
}

function generateColors(amount) {
  let colors = [];

  for (let i = 0; i < amount; i++) {
    let red = decToHex(faker.random.number(255)).padStart(2, '0');
    let green = decToHex(faker.random.number(255)).padStart(2, '0');
    let blue = decToHex(faker.random.number(255)).padStart(2, '0');

    colors.push(`#${red}${green}${blue}`);
  }

  return colors;
}

function generateImages(amount) {
  let images = [];

  for (let i = 0; i < amount; i++) {
    images.push(faker.image.fashion());
  }

  return images;
}

function decToHex(number) {
  return number.toString(16);
}

function generateProducts(amount) {
  let products = [];

  for (let i = 0; i < amount; i++) {
    let newProduct = {
      name: faker.commerce.productName(),
      variations: createVariations(),
      postedDate: faker.date.past(5, new Date()),
    };
    products.push(newProduct);
  }

  return products;
}

module.exports = products;
