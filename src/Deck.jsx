// Deck.js
import React, { useState } from 'react';
import Card from './Card';
import './App.css';


const Deck = ({deck}) => {
  const [cards, setCards] = useState(deck)
  const [selectedCard, setSelectedCard] = useState(null);

  const pullCard = () => {
    if (cards.length > 0) {
      const selected = cards.shift(); // Remove the top card from the deck
      setSelectedCard(selected);
      setCards([...cards]); // Update the deck
    }
  };

  return (
    <div className='deck-container'>
      <div className="button-container">
        {cards.length > 0 && (
          <div
            onClick={pullCard}
            className='deck-button'
          >
            Deck
          </div>
        )}
      </div>
      {selectedCard && (
        <div className='card-container'>
          <Card frontText={selectedCard.frontText} backText={selectedCard.backText} />
        </div>
      )}
    </div>
  );
};

export default Deck;

