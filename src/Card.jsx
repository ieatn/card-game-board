import React, { useState } from 'react';
import './App.css';

const Card = ({ frontText, backText, up }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const flipCard = () => {
    if (!isDown) {
        setIsDown(true); // Set the card permanently down when clicked for the first time
      } else {
        setIsFlipped(!isFlipped); // Flip the card on subsequent clicks
      }
  };

  return (
    <div>
      <div className={`   card ${isFlipped ? 'flipped' : ''} ${isDown && !up ? 'down' : ''}  ${isDown && up ? 'up' : ''}     `} onClick={flipCard}>
        <div className="front">
          <div>{frontText}</div>
        </div>
        <div className="back">
          <div>{backText}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
