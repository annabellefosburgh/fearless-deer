//Requiring all docs and information being used in the server file.
const fs = require('fs');
const express = require('express');
const path = require('path');
const noteList = require('./db/db.json');

//Initializing express
const app = express();
app.listen(3001)

//Initializing parse info

//A function used to write a new note

//A function used to delete a note ((BONUS, FINISH LAST))

//A get request for the list of all notes taken
app.get('./db/db.json', (req, res) => {

    res.send()
})

//A get request for a new note taken
app.get('./db.json/new', (req, res) => {

})