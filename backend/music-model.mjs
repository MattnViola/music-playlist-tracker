// Models for the Track Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'ERROR: Mongoose failed to connect to database.' });
    } else  {
        console.log('Successfully connected to MongoDB, Database: Test, Collection: Tracks.');
    }
});

// SCHEMA: Define the collection's schema.
const musicSchema = mongoose.Schema({
	title:    { type: String, required: true },
    artist:   { type: String, required: true },
    recDate:  { type: Date, required: true },
	duration: { type: Number, required: true },
    albumURL: { type: String }
});


const music = mongoose.model('Track', musicSchema);


// CREATE model *****************************************
const createTrack = async (title, artist, recDate, duration, albumURL) => {
    const track = new music({ 
        title: title, 
        artist: artist, 
        recDate: recDate,
        duration: duration,
        albumURL: albumURL
    });
    return track.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveMusic = async () => {
    const query = music.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveTrackByID = async (_id) => {
    const query = music.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteTrackById = async (_id) => {
    const result = await music.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateTrack = async (_id, title, artist, recDate, duration, albumURL) => {
    const result = await music.replaceOne({_id: _id }, {
        title: title, 
        artist: artist, 
        recDate: recDate,
        duration: duration,
        albumURL: albumURL
    });
    return { 
        _id: _id, 
        title: title, 
        artist: artist, 
        recDate: recDate,
        duration: duration,
        albumURL: albumURL
    }
}

// EXPORT the variables for use in the controller file.
export { createTrack, retrieveMusic, retrieveTrackByID, updateTrack, deleteTrackById }