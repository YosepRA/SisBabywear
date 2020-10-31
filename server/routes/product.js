const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { insensitiveRegex } = require('../helpers');

// INDEX: Product query.
router.get('/', async (req, res) => {
  try {
    const { search, page, pageSize, sortKey } = req.query;
    let query = {};

    if (search) query.name = { $regex: insensitiveRegex(search) };

    let paginationOptions = {
      page: Number(page),
      limit: Number(pageSize),
      sort: sortKey,
    };

    let products = await Product.paginate(query, paginationOptions);

    res.json(products);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// SHOW: Product details.
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    let product = await Product.findById(id);

    res.json(product);
  } catch (err) {
    console.err(err);
    res.sendStatus(500);
  }
});

// CREATE: New product.
router.post('/', async (req, res) => {
  try {
    /* 
      Received data structure from client:
      {
        name: "Caramel Blouse"
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
          }
        ]
      }
    */
  } catch (err) {
    console.err(err);
    res.sendStatus(500);
  }
});

module.exports = router;
