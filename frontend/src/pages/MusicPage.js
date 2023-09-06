import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TrackList from '../components/TrackList';

function MusicPage({ setTrack }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [music, setMusic] = useState([]);

    // RETRIEVE the entire list of music
    const loadMusic = async () => {
        const response = await fetch('/music');
        const music = await response.json();
        setMusic(music);
    } 
    

    // UPDATE a single music
    const onEditMusic = async music => {
        setTrack(music);
        redirect("/update");
    }


    // DELETE a single music  
    const onDeleteMusic = async _id => {
        const response = await fetch(`/music/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/music');
            const music = await getResponse.json();
            setMusic(music);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the music
    useEffect(() => {
        loadMusic();
    }, []);

    // DISPLAY the music
    return (
        <>
            <h2>List of Music</h2>
            <p className="description">A Place to keep track of music and album covers.</p>
            <TrackList
                music={music} 
                onEdit={onEditMusic} 
                onDelete={onDeleteMusic} 
            />
        </>
    );
}

export default MusicPage;