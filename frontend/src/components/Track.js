import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { AiFillDelete, AiFillEdit } from 'react-icons/ai';


function Track({ track, onEdit, onDelete }) {
    return (
        <tr>
            <td>{track.title}</td>
            <td>{track.artist}</td>
            <td>{track.recDate.slice(0,10)}</td>
            <td>{track.duration}</td>
            <td><img src={track.albumURL} alt="Album Cover" /></td>
            <td><AiFillDelete title="Delete this track" onClick={() => onDelete(track._id)} /></td>
            <td><AiFillEdit title="Edit this track" onClick={() => onEdit(track)} /></td>
        </tr>
    );
}

export default Track;