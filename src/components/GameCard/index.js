import React from "react";
import './style.css';

function GameCard(props) {
  return (
    <div className="col-3 col-md-3 col-lg-3 p-1 p-sm-2">
      <div 
        className={props.maxScore === 0 || (0 < props.currScore && props.currScore <= 12) ? "game-card-img-wrapper" : "game-card-img-wrapper shake"} 
        onClick={props.cardClick}
      >
        <img src={props.image} alt={props.name}/>
      </div>
    </div>
  );
}

export default GameCard;