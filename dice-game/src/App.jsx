import "./App.css";
import React, { useState } from "react";
import Dice1 from "./images/dice1.png";
import Dice2 from "./images/dice2.png";
import Dice3 from "./images/dice3.png";
import Dice4 from "./images/dice4.png";
import Dice5 from "./images/dice5.png";
import Dice6 from "./images/dice6.png";

const diceImages = [
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
];

function App() {
  const [playerDice, setPlayerDice] = useState(1);
  const [computerDice, setComputerDice] = useState(1);

  const rollDice = () => {
    setPlayerDice(Math.floor(Math.random() * 6) + 1);
    setComputerDice(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="App">
      <h1>DICE GAME!</h1>

      <div className="App2">
        <div>
          <h2>Player 1</h2> <img src={diceImages[playerDice - 1]} alt="Dice" />{" "}
        </div>
        <div>
          <h2>Player 2</h2>
          <img
            src={diceImages[computerDice - 1]}
            alt={`Dice ${computerDice}`}
          />
        </div>
      </div>
      <div className="dice">
        <button onClick={rollDice}>Roll Dice</button>
      </div>
    </div>
  );
}

export default App;
