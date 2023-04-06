const express = require('express');
const app = express();

const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/post');

dotenv.config();

app.use(express.json());

// connect to MongoDB

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, useUnifiedTopology: true 
})
.then(console.log('Connected to MongoDB'))
.catch(err => console.log('error',err));  

app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);

app.listen(process.env.PORT||"5000", () => {
    console.log(`Backend server is running on ${process.env.PORT}`);
});