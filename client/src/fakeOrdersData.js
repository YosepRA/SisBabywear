/* 
  Orders data structure:
  [
    {
      products: [{product}, {product}, {product}],
      email: "carla_grace@mail.com",
      shippingAddress: {
        firstName: "Carla",
        lastName: "Grace",
        address: "Sumatera Street number 23",
        country: "Indonesia",
        state: "Jawa Timur",
        city: "Malang",
        zip: 66179,
        phoneNumber: "+6291829548172"
      },
      billingAddress: {
        firstName: "Carla",
        lastName: "Grace",
        address: "Sumatera Street number 23",
        country: "Indonesia",
        state: "Jawa Timur",
        city: "Malang",
        zip: 66179,
        phoneNumber: "+6291829548172"
      },
      shipping: {
        name: "Pos Express",
        price: 9.59,
        estimatedTime: "1 - 4 days"
      },
      payment: {
        method: "Bank Transfer",
        total: 105.45
      }
      status: ["Order received", "Payment confirmed" ,"Packaging", "Sent to recipient"]
    }
  ]
*/

const faker = require('faker');
const fakeProductsData = require('./fakeProductsData');
const { randomNum } = require('./helpers');

faker.seed(100);

const shippingCompanies = ['Pos Indonesia', 'JNE', 'TIKI'];
const paymentMethods = ['Bank Transfer', 'Credit/Debit card', 'PayPal'];
const statusList = [
  'Order received',
  'Payment confirmed',
  'Packaging',
  'Sent to recipient',
];

const orders = generateOrders(103);

function generateProducts(amount) {
  let products = [];

  for (let i = 0; i < amount; i++) {
    const { name, variations } = faker.helpers.randomize(fakeProductsData);

    products.push({
      name,
      variation: faker.helpers.randomize(variations),
      amount: randomNum(1, 10),
    });
  }

  return products;
}

function generateOrders(amount) {
  let orders = [];

  for (let i = 0; i < amount; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();

    let newOrder = {
      products: generateProducts(faker.random.number(10)),
      email: faker.internet.email(firstName, lastName, 'mail.com'),
      shippingAddress: {
        firstName,
        lastName,
        address: faker.address.streetAddress(),
        country: faker.address.country(),
        state: faker.address.state(),
        city: faker.address.city(),
        zip: faker.address.zipCode(),
        phoneNumber: faker.phone.phoneNumber(),
      },
      billingAddress: {
        firstName,
        lastName,
        address: faker.address.streetAddress(),
        country: faker.address.country(),
        state: faker.address.state(),
        city: faker.address.city(),
        zip: faker.address.zipCode(),
        phoneNumber: faker.phone.phoneNumber(),
      },
      shipping: {
        name: faker.helpers.randomize(shippingCompanies),
        price: faker.commerce.price(1, 50, 2),
      },
      payment: {
        method: faker.helpers.randomize(paymentMethods),
        total: faker.commerce.price(10, 100, 2),
      },
      status: statusList.slice(0, randomNum(1, fakeProductsData.length)),
      postedDate: faker.date.past(5, new Date()),
    };

    orders.push(newOrder);
  }

  return orders;
}

module.exports = orders;
