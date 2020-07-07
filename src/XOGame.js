import React, {useState} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import XOGameTitle from './XOGameTitle.js';
import XOGameField from './XOGameField.js';
import XOGameResetter from './XOGameResetter.js';
import XOGameWinnerBlock from './XOGameWinnerBlock.js';

const Div = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 25px 0;
  font-size: 24px;
  border-bottom: 1px solid #000;
`; 

function XOGame(props) {
  const newGame = props.newGame.map(el => [...el]),
        [controlledTurn, setControlledTurn] = useState(1),
        [controlledResult, setControlledResult] = useState(props.game.map((el) => [...el])),
        [controlledIsWinner, setControlledIsWinner] = useState(undefined),
        [controlledReset, setControlledReset] = useState(0);

  let player = props.currentStore.nextPlayer,
      toggleTurn = () => (controlledTurn) ? setControlledTurn(0) : setControlledTurn(1),
      resetGame = () => {
        setControlledReset(1);
        setControlledTurn(1);
        setControlledResult(newGame);
        setControlledIsWinner(undefined);
      },
      winner,
      preventClicks;

  if (controlledIsWinner !== undefined ) {
    
    winner = controlledIsWinner;
    
    preventClicks = 1;
  }

  console.log(props.currentStore)

  return (
    <Div>
      <XOGameResetter resetGame={() => props.onResetGame()}/>
      <XOGameTitle player={player}  />
      <XOGameWinnerBlock winner={winner} />
      <XOGameField  arr={controlledResult} 
                    size={[props.currentStore.gameField.length, props.currentStore.gameField[0].length]}
                    toggleTurn={toggleTurn} 
                    player={player}
                    preventClicks={preventClicks}
                    returnWinner={(a) => setControlledTurn(a)}
                    returnArr={(a, b, c) => {setControlledResult(a); setControlledIsWinner(b); setControlledReset(c);}}
                    reset={controlledReset}
                    newGame={newGame}/>
    </Div>
  );
}




export default connect(
  state => ({
    currentStore: state
  }),
  dispatch => ({
    onResetGame: () => dispatch({type: 'RESET_GAME'})
  })
)(XOGame);