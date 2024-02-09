import { useState } from "react";
export default function Board(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const drop = (e) => {
    e.preventDefault();
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    // e.target.style.zIndex = '1';
    e.preventDefault();
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="slot">
        <div
          id={props.id}
          onDrop={drop}
          onDragOver={dragOver}
          className={props.className}
        >
          {props.children}
        </div>
        {/* <button className="btn" onClick={toggleModal}>Show All Cards</button> */}
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <h2>All Cards</h2>
            <div className="all-cards">{props.children}</div>
          </div>
        </div>
      )}
    </>
  );
}
