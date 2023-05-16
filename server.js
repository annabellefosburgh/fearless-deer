//Requiring all docs and information being used in the server file.
const fs = require('fs');
const express = require('express');
const route = require('./router/noteRoutes.js')

//Initializing express
const app = express();
const PORT = process.env.PORT || 3001;

//Initializing parse info
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', )

app.listen(PORT, () => {
    console.log("Port is running");
})