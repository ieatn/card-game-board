import React, { useState } from 'react';
import './App.css';

const Card = ({ frontText, backText, onDragEnd, onDragStart, handleDragStart, handleDragEnd }) => {
  const [flip, setFlip] = useState(false);
  const [slide, setSlide] = useState(false);
  const [selectedCard, setSelectedCard] = useState(0)


  const flipCard = () => {
    if (!slide) {
      setSlide(true); // Set the card permanently down when clicked for the first time
    } else {
      setFlip(!flip); // Flip the card on subsequent clicks
    }
  };

  return (
    <div className={`card  ${flip ? 'flip' : ''} ${slide ? 'slide' : ''}`} onClick={flipCard} draggable onDragStart={handleDragStart}
    onDragEnd={handleDragEnd}>
      <div className='card-front'>
        <p>{frontText}</p>
      </div>
      <div className="card-back">
        <p>{backText}</p>
      </div>
    </div>
  );
};

export default Card;
