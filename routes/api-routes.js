// Dependencies
const fs = require('fs');  // File system module
const path = require('path'); // Path module
const notes = require('../db/db.json'); // Notes module added to database

module.exports = (app) => 
{
    // Retrieve stored notes from database
    app.get('/api/notes', (req, res) =>
    {
        return res.json(notes);
    });

    // Post and save new note to database
    app.post('/api/notes', (req, res) =>
    {    
        let id = notes.length + 1
        console.log(id);
        req.body.id = parseInt(id);
        notes.push(req.body);
        fs.writeFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, jsonString => 
        {
            if (err) 
            {
                    console.log(err)
                    return;
            }
            res.json(JSON.parse(jsonString));
        }));
    });

    // Delete saved notes from database
    app.delete('/api/notes/:id', (req, res) => 
    {
        let id = notes.length - 1
        req.body.id = parseInt(id);
        notes.pop(req.params.body);
        res.json({ ok: true });
    });

}; 