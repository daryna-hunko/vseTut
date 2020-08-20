import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import XOGameField from './XOGameField.js';

function XOGameHistory(props) {
  let gamesHistory = (props.gamesHistory != undefined) ? <ul>{props.gamesHistory.map((el, i) => <li key={i}>{el.winningDate + el.winnerIs}</li>)}</ul> : '',
    winnigField = (props.gamesHistory.length != 0) ? props.gamesHistory[props.gamesHistory.length - 1].winnigField : '';

  return (
    <>
     <Router>
        <br/>
        &nbsp;&nbsp;
        <Link to={{pathname: "/history/LastWinningGame", state: { field: winnigField }}}>
          Last Winning Game
        </Link>

        
        <Switch>
          <Route exact path="/history">
            {gamesHistory}
          </Route>
          <Route path="/history/LastWinningGame" render={(location) => <XOGameField location={location}/>} />
        </Switch>

      </Router>
    </>
  );
}

export default connect(
  state => ({
    gamesHistory: state.gamesHistory
  })
)(XOGameHistory);