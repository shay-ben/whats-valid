const mongoose = require('mongoose');
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://kaurpreetkamal:Sukh2003@cluster0.ohspyvc.mongodb.net/whats-valid?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);
module.exports = mongoose.connection;