/* 
  Users data structure:
  {
    email: "carla_grace@mail.com",
    username: "carlagrace",
    firstName: "Carla",
    lastName: "Grace",
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
    orders : [ {orders}, {orders}, {orders} ]
  }
*/

const faker = require('faker');
const fakeOrdersData = require('./fakeOrdersData');

faker.seed(100);

const users = generateUsers(23);

function generateUsers(amount) {
  let users = [];

  for (let i = 0; i < amount; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();

    let newUser = {
      email: faker.internet.email(firstName, lastName),
      username: `${firstName}${lastName}`.toLowerCase(),
      firstName,
      lastName,
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
      orders: generateOrders(faker.random.number(10)),
    };

    users.push(newUser);
  }

  return users;
}

function generateOrders(amount) {
  let orders = [];

  for (let i = 0; i < amount; i++) {
    orders.push(faker.helpers.randomize(fakeOrdersData));
  }

  return orders;
}

module.exports = users;
