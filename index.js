const express = require('express');
const app = express();
const router = require('./router/router');
const cors = require('cors');
require('dotenv').config();

// Use CORS middleware
app.use(cors());

// Use body-parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use your router
app.use('/', router);

// Start the server
const port = process.env.PORT || 6000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
