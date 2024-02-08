import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const deck = [
    { frontText: "Card 1", backText: "Do you like spending money on charity?" },
    { frontText: "Card 2", backText: "Do you believe in supporting charitable causes?" },
    { frontText: "Card 3", backText: "How do you prioritize giving to charity within your budget?" },
    { frontText: "Card 4", backText: "What factors influence your decisions about donating money to charity?" },
    { frontText: "Card 5", backText: "Do you invest in the stock market?" },
    { frontText: "Card 6", backText: "How do you diversify your investment portfolio?" },
    { frontText: "Card 7", backText: "What's your approach to budgeting and saving?" },
    { frontText: "Card 8", backText: "How do you decide between spending and saving?" }
  ];

  const [dragging, setDragging] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "Dragged item");
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    console.log("Dropped:", data);
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid">
      <div className="deck">
        {deck.map((card, index) => (
          <Card
            key={index}
            frontText={card.frontText}
            backText={card.backText}
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
      <div className="drop-zones">
        <div
          className={`drop-area ${dragging ? "dragging" : ""}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          Agreed
        </div>
        <div
          className={`drop-area ${dragging ? "dragging" : ""}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          Disagreed
        </div>
      </div>
    </div>
  );
}

export default App;
