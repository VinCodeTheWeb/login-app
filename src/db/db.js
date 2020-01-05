const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => console.log('Database connected'));

module.exports = mongoose;
