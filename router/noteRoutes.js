//Initial requirements
const fs = require('fs');
const route = require('express').Router();

module.exports = noteRoutes => {

    //Setting up notes variable for router
    fs.readFile("./db/db.json", (data) => {
        var notes = JSON.parse(data)
    });

    //A get request for all notes for the /api/notes 
    route.get('/api/notes', (req, res) => {
        res.json(notes)
    });

    //Get request to retrieve a specific note from its id

    //Another request to delete a specific note from its id


    //A post route for the above get request
    route.post('/api/notes', (req, res) => {
        let newNote = req.body
        notes.push(newNote)
        refreshNotes();
    });

    //refresh function that renders display with recent changes made
    function refreshNotes() {
        fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
            if (err)
                console.log(err);
            else {
                return true;
            }
        })
    };

}