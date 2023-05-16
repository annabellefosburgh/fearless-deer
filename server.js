//Requiring all docs and information being used in the server file.
const fs = require('fs');
const express = require('express');
const path = require('path');
const router = require('./router/routes.js')

//Initializing express
const app = express();
app.listen(3001)

//Initializing parse info
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//A function used to write a new note
function writeNote()

//A function used to delete a note ((BONUS, FINISH LAST))
function deleteNote()