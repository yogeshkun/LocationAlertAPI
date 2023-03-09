const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.log(`MongoDB connection error: ${err}`);
  });
