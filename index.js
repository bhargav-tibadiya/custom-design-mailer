const express = require('express');
require('dotenv').config();

const port = process.env.PORT || 3000;

// Adding Middleware
const app = express();
app.use(express.json());

// Mounting API Routes
const router = require('./router/Mail')
app.use('/api/v1', router)

// Acitivate Server 
app.listen(port, () => {
  console.log(`Server is Listening on Port : ${port}`);
})