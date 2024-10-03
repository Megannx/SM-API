const mongoose = require('mongoose');
require('dotenv').config(); 

// Define the connection string using an environment variable
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkDB';

// Connect to MongoDB
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected successfully!');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = mongoose.connection;