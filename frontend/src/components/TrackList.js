import React from 'react';
import { Link } from 'react-router-dom';
import Track from './Track';
import { BsFillFileEarmarkMusicFill } from 'react-icons/bs';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function TrackList({ music, onDelete, onEdit }) {
    return (
        <table>
            <caption>Add and Edit Music</caption>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Recording Date</th>
                    <th>Duration (In Seconds)</th>
                    <th>Album Cover</th>
                    <th>Delete</th>
                    <th><Link to="../create"><BsFillFileEarmarkMusicFill title="Add a track"/></Link></th>
                </tr>
            </thead>
            <tbody>
                {music.map((track, i) => 
                    <Track
                        track={track} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default TrackList;
