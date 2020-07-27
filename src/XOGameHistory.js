import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from "react-router-dom";

function XOGameHistory(props) {
  return (
    <>
      <ul>
         {props.currentStore.gamesHistory.map((el, i) => <li key={i}>{el}</li>)}
      </ul>
      <Link to="/">Home</Link>
    </>
  );
}

export default connect(
  state => ({
    currentStore: state
  })
)(XOGameHistory);