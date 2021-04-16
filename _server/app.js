const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// route imports
const ProductRoutes = require('./routes/product.Routes');

// custom middleware
const { notFound, errorResponse } = require('./middleware/errorHandler');

// register middleware
app.use(express.json());
app.use(cors());

// register routes
app.use('/api/v1/products', ProductRoutes);

// error handling middleware
app.use(notFound);
app.use(errorResponse);

// connect to DB
require('./data/db.js')();

// export to server.js
module.exports = app;
