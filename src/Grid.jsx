import Deck from "./Deck"
import './App.css';
import { useState } from "react";
import Card from "./Card";

export default function Grid() {

  const deck1 = [
    { frontText: 'Card 1', backText: 'Are you happy' },
    { frontText: 'Card 2', backText: 'Are you sad' },
    { frontText: 'Card 3', backText: 'Are you mad' },
    { frontText: 'Card 4', backText: 'Are you glad' }
  ]
  const deck2 = [
    { frontText: 'Card 1', backText: 'Deck 2' },
    { frontText: 'Card 2', backText: 'Deck 2' },
    { frontText: 'Card 3', backText: 'Deck 2' },
    { frontText: 'Card 4', backText: 'Deck 2' }
  ]

  return (
    <div className="grid">
        {/* initially there are 2 decks. if i press one of them, slide a card diagonally into middle column */}
        {/* when clicking card, flip the card in place. */}
        {/* be able to drag the middle card into either column on right. */}
        {/* <Deck deck={deck1}/>
        <Deck deck={deck2}/> */}
        <div className="deck">
          <Card />
          <Card />
        </div>
        <div className="deck">
          <Card up={true} />
          <Card up={true} />
        </div>
    </div>
  )
}
