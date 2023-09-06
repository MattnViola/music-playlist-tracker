// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigate from './components/Navigate';
import './App.css';

// Import Pages (but only the ones you need).
// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design.
// If your schema requires SHORT data input, then use the TABLE design.

import MusicPage from './pages/MusicPage';
import HomePage from './pages/Homepage'
import TopicsPage from './pages/TopicsPage';
import AddTrackPageTable from './pages/AddTrackPageTable';
import EditTrackPageTable from './pages/EditTrackPageTable';

// Define the function that renders the content in Routes, using State.
function App() {

  const [track, setTrackToEdit] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>Matthew Norman</h1>
            <img src="android-chrome-192x192.png"  alt="Matthew Norman Logo" />
          </header>

          <Navigate />

          <main>
            <section>
                <Routes> 
                    <Route path="/" element={<HomePage />} />
                    <Route path="/topics" element={<TopicsPage />} />
                    <Route path="/music" element={<MusicPage setTrack={setTrackToEdit} />} />
                    <Route path="/create" element={<AddTrackPageTable />} /> 
                    <Route path="/update" element={<EditTrackPageTable trackToEdit={track} />} />
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Matthew Norman</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;