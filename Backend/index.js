//Express server
const express = require('express');
const app = express(); //creates an express app

const cors = require('cors');

//Middleware
app.use(cors());

//Database
const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/job-finder';
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB connected'));

app.use(express.json());
const jobRoute = require('./routes/jobs');

app.get('/', (req, res) => {
  res.send('Hello World');
  console.log(req.body);
});

app.use('/jobs', jobRoute);

app.listen(8080, () => console.log('Server is up and running on port 8080'));
