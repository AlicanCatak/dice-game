import React from "react";

const Dice = ({ value }) => {
  return <img src={`images/dice${value}.png`} alt={`Dice ${value}`} />;
};

export default Dice;
