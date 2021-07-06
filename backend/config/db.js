const dotenv = require('dotenv');
dotenv.config();

console.log(process.env.NODE_ENV);

const mongoose = require('mongoose');
try {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB connected`);
} catch (err) {
  console.error(`Error: ${err}`);
}
