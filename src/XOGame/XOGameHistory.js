import React, {useState} from 'react';
import {connect} from 'react-redux';

function XOGameHistory(props) {
  return (
    <>
      <ul>
         {props.gamesHistory.map((el, i) => <li key={i}>{el}</li>)}
      </ul>
    </>
  );
}

export default connect(
  state => ({
    gamesHistory: state.gamesHistory
  })
)(XOGameHistory);