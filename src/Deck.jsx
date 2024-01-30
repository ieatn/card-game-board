// Deck.js
import React, { useState } from 'react';
import Card from './Card';
import './Deck.css'; // Import the CSS file

const Deck = () => {
  const [cards, setCards] = useState([
    { frontText: 'Card 1', backText: 'Card back 1' },
    { frontText: 'Card 2', backText: 'Card back 2' },
    { frontText: 'Card 3', backText: 'Card back 3' },
    { frontText: 'Card 4', backText: 'Card back 4' }
  ]);
  const [selectedCard, setSelectedCard] = useState(null);

  const pullCard = () => {
    if (cards.length > 0) {
      const selected = cards.shift(); // Remove the top card from the deck
      setSelectedCard(selected);
      setCards([...cards]); // Update the deck
    }
  };

  return (
    <div className="deck-container">
      <div className="button-container">
        {cards.length > 0 && (
          <div
            onClick={pullCard}
            className="deck-button"
          >
            Deck
          </div>
        )}
      </div>
      {selectedCard && (
        <div className="card-container">
          <Card frontText={selectedCard.frontText} backText={selectedCard.backText} />
        </div>
      )}
    </div>
  );
};

export default Deck;

