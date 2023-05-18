//Requiring all docs and information being used in the server file.
const fs = require('fs');
const express = require('express');
const noteRoute = require(noteRoutes)
const htmlRoute = require(htmlRoutes);
const path = require('path')

//Initializing express
const app = express();
const PORT = process.env.PORT || 3001;

//Initializing parse info
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Get requests for the /note and * to send to appropriate html pages
route.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})
//Get request for /notes to return notes.html
route.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes'))
})

app.listen(PORT, () => {
    console.log("Port is running");
})