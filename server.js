// Dependencies
const express = require('express'); // Express framework
const path = require('path') // Path module

// Set up express App
const app = express();
const PORT = process.env.PORT || 3333;

// Set up express app for parsing 
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes 
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

// App listener to start server to port localhost
app.listen(PORT, () => 
{
    console.log(`Server started to listen on PORT: ${PORT}`)

});




