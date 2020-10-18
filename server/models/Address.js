const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  country: String,
  state: String,
  city: String,
  zip: String,
  phoneNumber: String,
});

module.exports = mongoose.model('Address', addressSchema);
