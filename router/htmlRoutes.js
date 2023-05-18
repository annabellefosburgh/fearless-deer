//Initial requirements
const fs = require('fs');
const route = require('express').Router();

module.exports = htmlRoutes => {

    //Get request for * to return index.html
    route.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '/public/index.html'))
    })
    //Get request for /notes to return notes.html
    route.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, './public/notes'))
    })


}