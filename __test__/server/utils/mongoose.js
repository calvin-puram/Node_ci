const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(`__dirname, './.env`) });

exports.connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI_CI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
};

exports.closeDB = async () => {
  await mongoose.connection.close();
};
