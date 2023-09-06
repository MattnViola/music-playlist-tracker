import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddTrackPageTable = () => {

    const [title, setTitle]         = useState('');
    const [artist, setArtist]       = useState('');
    const [recDate, setRecDate]     = useState('');
    const [duration, setDuration]   = useState('');
    const [albumURL, setAlbumURL]   = useState('');
    
    const redirect = useNavigate();

    const addTrack = async () => {
        const newTrack = { title, artist, recDate, duration, albumURL };
        const response = await fetch('/music', {
            method: 'post',
            body: JSON.stringify(newTrack),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Track has been successfully added.`);
        } else {
            alert(`The track was not added, check your input:  ${response.status}`);
        }
        redirect("/music");
    };


    return (
        <>
        <article>
            <h2>Add a track</h2>
            <p className="description">Fill out the boxes and click "Add" to add a track to the collection.</p>
            
            <table>
                <caption>Which track are you adding?</caption>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Artist</th>
                        <th>Recording Date</th>
                        <th>Duration</th>
                        <th>AlbumURL</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="title">Track title</label>
                        <input
                            type="text"
                            placeholder="Title of the track"
                            value={title}
                            onChange={e => setTitle(e.target.value)} 
                            id="title" />
                    </td>

                    <td><label for="artist">Artist</label>
                        <input
                            type="text"
                            value={artist}
                            placeholder="Artist's Name"
                            onChange={e => setArtist(e.target.value)} 
                            id="artist" />
                    </td>

                    <td><label for="recDate">Recording Date</label>
                        <input
                            type="text"
                            placeholder="MM-DD-YYYY"
                            value={recDate.slice(0,10)}
                            onChange={e => setRecDate(e.target.value)} 
                            id="recDate" />
                    </td>
                    <td><label for="duration">Duration (In Seconds)</label>
                        <input
                            type="number"
                            placeholder="In Seconds"
                            value={duration}
                            onChange={e => setDuration(e.target.value)} 
                            id="duration" />
                    </td>
                    <td><label for="albumURL">URL of the Album Cover</label>
                        <textarea
                            type="text"
                            placeholder="Album URL"
                            value={albumURL}
                            onChange={e => setAlbumURL(e.target.value)} 
                            id="albumURL" />
                    </td>

                    <td>
                    <label for="submit">Submit</label>
                        <button
                            type="submit"
                            onClick={addTrack}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddTrackPageTable;