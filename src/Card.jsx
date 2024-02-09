import React, { useState } from "react";
import "./App.css";

const Card = ({ frontText, backText, id }) => {
  const [flip, setFlip] = useState(false);
  const [slide, setSlide] = useState(false);

  const flipCard = () => {
    setFlip(!flip);
  };

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={id}
      className={`card  ${flip ? "flip" : ""}`}
      onClick={flipCard}
      draggable
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <div className="card-front">
        <p>{frontText}</p>
      </div>
      <div className="card-back">
        <p>{backText}</p>
      </div>
    </div>
  );
};

export default Card;
