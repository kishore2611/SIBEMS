const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const dotenv = require("dotenv");

const bodyParser = require('body-parser');
const morgan = require('morgan');

// routes
const authRoutes = require('./routes/api/auth');
const userRoutes = require('./routes/api/users');

dotenv.config();
const app = express();

// CORS Middleware
app.use(cors());
// Logger Middleware
app.use(morgan('dev'));
// Bodyparser Middleware
app.use(
  bodyParser.urlencoded({
      extended: false
  })
);
app.use(bodyParser.json());

// DB Config
// const db = `mongodb+srv://SIBEMS:facemask@cluster0.1yjj0.mongodb.net/members?retryWrites=true&w=majority`;
const db = `mongodb+srv://SIBEMS:facemask@cluster1.yqlvr.mongodb.net/members?retryWrites=true&w=majority`;

// Connect to Mongo
mongoose
  .connect(db) // Adding new mongo url parser
  .then(() => {
    // debuggers
    console.log('MongoDB Connected...')})
  .catch((err) => {console.log("mongoose error: ",err)
  console.log("mongoose connection: ", err)});

// Use Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(9002, () => console.log(`Server started on PORT 9002`));


