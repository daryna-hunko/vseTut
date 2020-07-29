import React from 'react';
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
  return (
    <Div>
      <XOGameResetter resetGame={() => props.onResetGame()}/>
      <XOGameTitle player={props.nextPlayer}  />
      <XOGameWinnerBlock winner={props.winner} />
      <XOGameField />
    </Div>
  );
}

export default connect(
  state => ({
    nextPlayer: state.nextPlayer,
    winner: state.winner
  }),
  dispatch => ({
    onResetGame: () => dispatch({type: 'RESET_GAME'})
  })
)(XOGame);