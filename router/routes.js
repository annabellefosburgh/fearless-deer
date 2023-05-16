//Initial requirements
const fs = require('fs');
const path = require('path');

//Setting up notes variable for router
fs.readFile("./db/db.json", (data) => {
    var notes = JSON.parse(data)
})

//A get request for all notes for the /api/notes 
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

//A post route for the above get request
app.post('/api/notes', (req, res) => {
    let newNote = req.body
    notes.push(newNote)
})

//Get request for * to return index.html

//Get request for /notes to return notes.html

//refresh function that renders display with recent changes made