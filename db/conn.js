const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const url = 'mongodb+srv://yogeshkunkawlekar12:Yogeshkun509@cluster0.wshvsh5.mongodb.net/mylocationapi?retryWrites=true&w=majority'
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.log(`MongoDB connection error: ${err}`);
  });
