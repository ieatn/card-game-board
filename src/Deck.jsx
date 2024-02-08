// Deck.js
import React, { useState } from 'react';
import Card from './Card';
import './App.css';


const Deck = ({deck}) => {

 const [currentDeck, setCurrentDeck] = useState(deck);
 const [isTranslated, setIsTranslated] = useState(false);

 const pullCard = () => {
   if (currentDeck.length > 0) {
     // Remove the card from the top of the deck
     const newDeck = [...currentDeck];
     newDeck.shift(); // Remove the first card
     setCurrentDeck(newDeck);
     setIsTranslated(true);
   } else {
     console.log("Deck is empty!");
   }
 };

 return (
   <>
     <button onClick={pullCard}>draw 1 ({currentDeck.length})</button>
     <div className="deck">
       <div className={`card ${isTranslated ? 'translate-right' : ''}`}>
         {currentDeck.map((item) => (
           <Card frontText={item.frontText} backText={item.backText} />
         ))}
       </div>
     </div>
   </>
 
 );
};


export default Deck;
