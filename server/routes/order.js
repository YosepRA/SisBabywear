const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const fakeOrdersData = require('../fakeOrdersData');

router.get('/', async (req, res) => {
  try {
    const { id, page, pageSize, sortKey } = req.query;
    let query = {};

    if (id) query._id = id;

    let paginationOptions = {
      page: Number(page),
      limit: Number(pageSize),
      sort: sortKey,
      populate: ['shippingAddress', 'billingAddress'],
    };

    let results = await Order.paginate(query, paginationOptions);

    res.json(results);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
