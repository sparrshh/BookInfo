const express = require('express')
const app = express();
const Book = require('./models/Book')
const mongoose = require('mongoose')
const bookRoutes = require('./routes/bookRoutes');
const port =  process.env.PORT || 3000

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

app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});