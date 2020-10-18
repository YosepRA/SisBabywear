const Product = require('./models/Product');
const Order = require('./models/Order');
const User = require('./models/User');
const Address = require('./models/Address');

const productsData = require('./fakeProductsData');
const ordersData = require('./fakeOrdersData');
const usersData = require('./fakeUsersData');

async function cleanDatabase() {
  await Product.deleteMany({});
  await Order.deleteMany({});
  await User.deleteMany({});
  await Address.deleteMany({});
}

async function createProducts() {
  await Product.create(productsData);
}

async function createAddressReference(order) {
  let shippingAddress = await Address.create(order.shippingAddress);
  let billingAddress = await Address.create(order.billingAddress);

  // Replace both addresses with newly stored address.
  order = {
    ...order,
    shippingAddress,
    billingAddress,
  };

  return order;
}

async function createUsers() {
  for (let user of usersData) {
    let shippingAddress = await Address.create(user.shippingAddress);
    let billingAddress = await Address.create(user.billingAddress);

    let orders = [];

    for (let order of user.orders) {
      let addressOrder = await createAddressReference(order);
      let referencedOrder = await Order.create(addressOrder);
      orders.push(referencedOrder);
    }

    // Replace both addresses with newly stored address.
    user = {
      ...user,
      shippingAddress,
      billingAddress,
      orders,
    };

    await User.create(user);
  }
}

async function seed() {
  await cleanDatabase();

  await createProducts();

  for (let order of ordersData) {
    let addressOrder = await createAddressReference(order);
    await Order.create(addressOrder);
  }

  await createUsers();
}

module.exports = seed;
