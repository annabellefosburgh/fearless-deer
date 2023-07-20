//Requiring all docs and information being used in the server file.
const fs = require('fs');
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


//Initializing express
const app = express();
const PORT = process.env.PORT || 3001;

//Initializing parse info
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

//Get request for all saved notes
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let dbData = JSON.parse(data);
        res.json(dbData)
    });   
})

//Post request for a new note to add to the rest of the notes
app.post('/api/notes', (req, res) => {
    const newNote = req.body
    newNote.id = uuidv4()
    db.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(db))
    res.json(db)
})

//Deletes a note by using it's specific id
app.delete('/api/notes/:id', (req, res) => {
    const newDb = db.filter((note) =>
        note.id !== req.params.id)
    fs.writeFileSync('./db/db.json', JSON.stringify(newDb))
    readFile.json(newDb)
})

//Gets the home page and returns our index html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

//Grabs all notes and returns our notes html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'))
})

//Grabs our index html for anything else
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})



app.listen(PORT, () => {
    console.log("Express web server running on port " + PORT);
})