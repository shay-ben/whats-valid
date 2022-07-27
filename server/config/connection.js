const mongoose = require('mongoose');
mongoose.connect(
  // process.env.MONGODB_URI || 'mongodb+srv://kaurpreetkamal:Sukh2003@cluster0.ohspyvc.mongodb.net/whats-valid?retryWrites=true&w=majority',
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/whats-valid',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
module.exports = mongoose.connection;