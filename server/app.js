const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Routes.
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');

const seed = require('./seed');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionSuccessStatus: 200,
};

// Database Setup.
mongoose.connect('mongodb://localhost:27017/sisbabywear', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', () => console.error('Database connection error'));
db.on('open', () => console.log('Successfully connected to the Database.'));

// Middlewares
app.set('port', process.env.PORT || 3500);
app.use(logger('dev'));
app.use(cors(corsOptions));

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// SeedDB.
// seed().then(() => console.log('Seeding completed.'));

app.listen(app.get('port'), () =>
  console.log(`Server is listening on port ${app.get('port')}...`)
);
