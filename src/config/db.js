const mongoose = require('mongoose');
 
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://progbasma:progbasma@cluster0.rctpl.mongodb.net/s1db');
    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err);
    process.exit(1);
  }
};
 
module.exports = connectDB;
 