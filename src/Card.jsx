import React, { useState } from 'react';
import './Card.css';

const Card = ({ frontText, backText }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDown, setIsDown] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    setIsDown(true); // Set the card permanently down when clicked
  };

  return (
    <div>
      <div className={`card ${isFlipped ? 'flipped' : ''} ${isDown ? 'down' : ''}`} onClick={flipCard}>
        <div className="front">
          <h2>{frontText}</h2>
        </div>
        <div className="back">
          <h2>{backText}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
