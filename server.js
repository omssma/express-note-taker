// Dependencies
const express = require('express');
const path = require('path')

// set up express App
const app = express();
const PORT = process.env.PORT || 3333;


// set up express app for parsing 
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api', api-routes);
// app.use('/', html-routes);

// Routes 
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

// App listener to start server
app.listen(PORT, () => {
    console.log(`Server started to listen on PORT: ${PORT}`)

});




