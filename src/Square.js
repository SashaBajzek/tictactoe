import React from "react";

function Square(props) {
  return (
    <button
      className={props.winningSquare ? "square--winning square" : "square"}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

export default Square;
