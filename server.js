//Requiring all docs and information being used in the server file.
const fs = require('fs');
const express = require('express');
const path = require('path');
require('./api/notes')
const { v4: uuidv4 } = require('uuid');

//Initializing express
const app = express();
const PORT = process.env.PORT || 3001;

//Initializing parse info
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


//Gets the home page and returns our index html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//Grabs all notes and returns our notes html
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// app.get("/assets/css/styles.css", (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/assets/css/styles.css'))
// })


//Grabs our index html for anything else
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })


app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let dbData = JSON.parse(data);
        res.json(dbData)
    });   
})

app.post('/api/notes', (req, res) => {
    const {title, text} = req.body;
    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4()
        }
        fs.readFile('./db/db.json', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            } else {
                const parsedNotes = JSON.parse(data);
                parsedNotes.push(newNote)
                fs.writeFile('./db/db.json', JSON.stringify(parsedNotes, null, 4), (err) => {
                    err ? console.log(err) : console.log('successfully added note')
                })
            }
        })
        const response = {
            status: 'success',
            body: newNote
        }
        console.log(response);
        res.json(response);
    } else {
        res.json('unable to post note')
    }
})

app.listen(PORT, () => {
    console.log("Express web server running on port " + PORT);
})