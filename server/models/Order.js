const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      name: String,
      variation: {
        id: Number,
        size: String,
        color: String,
        stock: Number,
        images: [String],
        price: Number,
      },
      amount: Number,
    },
  ],
  email: String,
  shippingAddress: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
  billingAddress: {
    type: Schema.Types.ObjectId,
    ref: 'Address',
  },
  shipping: {
    name: String,
    price: Number,
    estimatedTime: String,
  },
  payment: {
    method: String,
    total: Number,
  },
  status: [String],
  postedDate: { type: Date, default: Date.now },
});

orderSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Order', orderSchema);
