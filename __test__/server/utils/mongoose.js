const mongoose = require('mongoose');

exports.connectDB = async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/completeauth', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
};

exports.closeDB = async () => {
  await mongoose.connection.close();
};
