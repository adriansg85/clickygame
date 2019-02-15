import React from "react";
import GameCard from "../GameCard";
import './style.css';

function GameBoard(props) {
  return (
    <div className="container mb-xs-1 mb-sm-2">

      <div className="row">
        {props.characters.map(character => (
          <GameCard 
            key={character.id} 
            id={character.id} 
            name={character.name}
            image={character.image}
            cardClick={()=>props.cardClick(character.id)}
            maxScore={props.maxScore}
            currScore={props.currScore}
          />
        ))}

      </div>
    </div>
  );
}

export default GameBoard;