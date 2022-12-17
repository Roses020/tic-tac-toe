import React from "react";

const Square = (props) => {
  const handleClick = () => {
    if(props.squareValue === ''){
      if(props.player === true){
        props.squares[props.index] = 'X'
        props.setSquares(props.squares)
        props.setPlayer(false)
      }else{
        props.squares[props.index] = 'O' 
        props.setSquares(props.squares)
        props.setPlayer(true)
      }
    }
  }
  
 return (
    <div className="square" onClick={handleClick}>
       {props.squareValue === 'O' ? <img src="https://cdn.discordapp.com/attachments/830137099042816080/984895322184634448/devcircle_1.png" /> : props.squareValue}
       
    </div>
 );
};

export default Square;