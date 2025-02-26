import React, { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const stopSound = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <div className="App">
      <h1>Music Player</h1>
      <audio ref={audioRef} src="/path/to/song.mp3" />
      <button onClick={playSound} disabled={isPlaying}>Play</button>
      <button onClick={stopSound} disabled={!isPlaying}>Stop</button>
    </div>
  );
};

export default App;
