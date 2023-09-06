import React from 'react';
import { Link } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigate() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/music">Music</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/gallery">Gallery</Link>
    </nav>
  );
}

export default Navigate;
