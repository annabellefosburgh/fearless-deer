//Initial requirements
const fs = require('fs');
const route = require('express').Router();

//Get request for * to return index.html
route.get('*', (req, res) => {
    res.render('index')
})
//Get request for /notes to return notes.html
route.get('/notes', (req, res) => {
    res.render('notes')
})

module.exports = route;