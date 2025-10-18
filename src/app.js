require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
 
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
 
const app = express();
connectDB();
 
app.use(cors());
app.use(express.json());
 
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
 
app.get('/', (req, res) => res.send('API running...'));
 
module.exports = app;