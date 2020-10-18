const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const productSchema = new mongoose.Schema({
  name: String,
  variations: [
    {
      id: Number,
      size: String,
      color: String,
      stock: Number,
      images: [String],
      price: Number,
    },
  ],
  postedDate: { type: Date, default: Date.now },
});

productSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Product', productSchema);
