import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const API_BASE = 'https://vipx-music-player-backend.onrender.com';

export default function VIPXPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div style={{ background: '#000', color: '#fff', padding: '20px', borderRadius: '15px', textAlign: 'center' }}>
      <h1>VIPX Player</h1>
      <button onClick={togglePlay} style={{ padding: '20px', borderRadius: '50%' }}>
        {isPlaying ? <Pause /> : <Play />}
      </button>
      <audio ref={audioRef} src={`${API_BASE}/api/stream/work`} />
    </div>
  );
}
