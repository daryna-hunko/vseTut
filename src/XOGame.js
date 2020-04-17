import React, {useState} from 'react';
import styled from 'styled-components';
import XOGameTitle from './XOGameTitle.js';
import XOGameField from './XOGameField.js';

const Div = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 25px 0;
  font-size: 24px;
  border-bottom: 1px solid #000;
`; 
const Btn = styled.button`
  cursor: pointer;
  text-align: center;
  padding: 5px;
`; 

function XOGame(props) {
  const [controlledTurn, setControlledTurn] = useState(1),
        [controlledResult, setControlledResult] = useState(props.game);

  let player = (controlledTurn) ? 'X' : '0';
  let arr = controlledResult,
      addVal = (a, b) => {
        if (arr[a][b] === undefined) {
          arr[a][b] = player;
          toggleTurn();
          setControlledResult(arr);
        }
      },
      toggleTurn = () => (controlledTurn) ? setControlledTurn(0) : setControlledTurn(1),
      move = (a, b) => addVal(a, b),
      resetGame = () => {
        arr = [[,,,],[,,,],[,,,]]
        setControlledResult(arr);
        setControlledTurn(1);
      };


  return (
    <Div>
      <Btn onClick={() => resetGame()}>Новая игра</Btn>
      <XOGameTitle player={player}  />

      <XOGameField arr={arr} size={props.size} move={(a, b) => addVal(a, b)}/>
    </Div>
  );
}




export default XOGame;