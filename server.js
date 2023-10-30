const express = require('express')
const app = express();
const Book = require('./models/Book')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());
require('dotenv').config();

const uri = process.env.MONGODB


mongoose.connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
    
  );
 
  
app.use('/api', bookRoutes); 

app.listen(3000, () => {
  console.log('Server listening at port 3000');
});