import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditTrackPageTable = ({ trackToEdit }) => {
 
    const [title, setTitle]         = useState(trackToEdit.title);
    const [artist, setArtist]       = useState(trackToEdit.artist);
    const [recDate, setRecDate]     = useState(trackToEdit.recDate);
    const [duration, setDuration]   = useState(trackToEdit.duration);
    const [albumURL, setAlbumURL]   = useState(trackToEdit.albumURL);
    
    const redirect = useNavigate();

    const editTrack = async () => {
        const response = await fetch(`/music/${trackToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                title: title, 
                artist: artist, 
                recDate: recDate,
                duration: duration,
                albumURL: albumURL
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Track successfully updated.`);
        } else {
            const errMessage = await response.json();
            alert(`Error: Unable to update Track: ${response.status}. ${errMessage.Error}`);
        }
        redirect("/music");
    }

    return (
        <>
        <article>
            <h2>Edit a track</h2>
            <p className="description">Update any value and click "Edit" to update a track.</p>
            <table>
            <caption>Update Track Information</caption>
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
                            onClick={editTrack}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditTrackPageTable;