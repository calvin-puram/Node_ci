const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './.env' });

let DB;
if (['production', 'development'].includes(process.env.NODE_ENV)) {
  DB = process.env.MONGO_URI;
} else {
  DB = process.env.MONGO_URI_CI;
}

const connectDB = async () => {
  try {
    const con = await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
    console.log(`connected to database on ${con.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
