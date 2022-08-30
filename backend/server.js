require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./server/routes/userRoute');

// express app
const app = express();

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// routes
app.use('/api/users', userRoutes);

// connect to db/mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log(`connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  })