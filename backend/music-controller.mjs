// Controllers for the Track Collection

import 'dotenv/config';
import express from 'express';
import * as music from './music-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/music', (req,res) => { 
    music.createTrack(
        req.body.title, 
        req.body.artist, 
        req.body.recDate,
        req.body.duration,
        req.body.albumURL
        )
        .then(track => {
            res.status(201).json(track);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'ERROR: Something went wrong with creating the track.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/music', (req, res) => {
    music.retrieveMusic()
        .then(track => { 
            if (track !== null) {
                res.json(track);
            } else {
                res.status(404).json({ Error: 'ERROR: There aren\'t any tracks yet!' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'ERROR: Something went wrong with your track request.' });
        });
});


// RETRIEVE by ID controller
app.get('/music/:_id', (req, res) => {
    music.retrieveTrackByID(req.params._id)
    .then(track => { 
        if (track !== null) {
            res.json(track);
        } else {
            res.status(404).json({ Error: 'ERROR: We couldn\'t find that specific track.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'ERROR: Something went wrong trying to find that track.' });
    });

});


// UPDATE controller ************************************
app.put('/music/:_id', (req, res) => {
    music.updateTrack(
        req.params._id, 
        req.body.title, 
        req.body.artist, 
        req.body.recDate,
        req.body.duration,
        req.body.albumURL
    )
    .then(track => {
        res.json(track);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'ERROR: Something went wrong with updating the track.' });
    });
});


// DELETE Controller ******************************
app.delete('/music/:_id', (req, res) => {
    music.deleteTrackById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'The track was successfully removed.' });
            } else {
                res.status(404).json({ Error: 'ERROR: That track already doesn\'t exist!' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'ERROR: Something went wrong with that deletion request.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});