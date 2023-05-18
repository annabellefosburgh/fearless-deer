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

//Setting up notes variable to use for api get request
fs.readFile("./db/db.json", (data) => {
    var notes = JSON.parse(data)
});

route.get('/api/notes', (req, res) => {
    res.json(notes)
});

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

app.listen(PORT, () => {
    console.log("Port is running");
})