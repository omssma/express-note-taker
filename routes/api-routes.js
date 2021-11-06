// Dependencies
const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');

module.exports = (app) => 
{
    // Retrieve stored notes from database
    app.get('/api/notes', (req, res) => 
    {
        return res.json(notes);
    });

    // Post new note to server
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

    // Delete saved notes from server
    app.delete('/api/notes/:id', (req, res) => 
    {
        let id = notes.length - 1
        req.body.id = parseInt(id);
        notes.pop(req.params.body);
        res.json({ ok: true });
    });

}; 