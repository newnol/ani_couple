import React, { useState, useRef, useEffect } from 'react';

function MusicSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/assets/romantic-music.mp3');
    audioRef.current.loop = true;
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="music">
      <div className="curved-divider"></div>
      <div className="container music-section">
        <h2>Set the Mood</h2>
        <p>Enjoy our romantic background music.</p>
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause Music' : 'Play Music'}
        </button>
        <audio ref={audioRef} />
      </div>
    </section>
  );
}

export default MusicSection;
