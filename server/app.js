const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
require('dotenv').config(); // Make sure to call this at the top of your file
const User = require('./models/user');

app.use(express.json()); // Middleware for parsing JSON bodies

// Basic route for GET request
app.get('/', (req, res) => {
  res.send('Blockchain Inheritance System Backend is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error(err));

