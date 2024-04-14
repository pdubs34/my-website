import React, { useState, useEffect } from 'react';
import '../styles/birthday.css';

const Birthday = () => {
  const [currentColor, setCurrentColor] = useState('red');
  const [audio] = useState(new Audio(require('../audio/Suits.mp3')));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const colors = [
      'red', 'blue', 'green', 'orange',
      'purple', 'yellow', 'cyan', 'magenta',
      'lime', 'pink', 'teal', 'brown',
      'navy', 'olive', 'maroon', 'coral',
      'indigo', 'turquoise', 'lavender', 'silver'
    ];

    const colorIntervalId = setInterval(() => {
      setCurrentColor(prevColor => {
        const currentIndex = colors.indexOf(prevColor);
        const nextIndex = (currentIndex + 1) % colors.length;
        return colors[nextIndex];
      });
    }, 1000);

    return () => {
      clearInterval(colorIntervalId);
      if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reset the audio when the component unmounts
      }
    };
  }, [audio]);

  useEffect(() => {
    audio.addEventListener('ended', () => setIsPlaying(false));

    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
    };
  }, [audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.error('Playback failed', error);
      });
    }
  };

  return (
    <div className="birthday-holder">
            <h1 style={{ color: currentColor }}>HAPPY BIRTHDAY JSON</h1>
      <button onClick={togglePlay} className="play-button">
        {isPlaying ? 'Pause Music' : 'Play Me'}
      </button>
    </div>
  );
};

export default Birthday;
