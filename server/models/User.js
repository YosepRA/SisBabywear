const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  username: { type: String, required: true },
  firstName: String,
  lastName: String,
  shippingAddress: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
  billingAddress: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
  orders: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
