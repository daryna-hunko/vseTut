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
    winnigField = (props.gamesHistory.length != 0) ? props.gamesHistory[props.gamesHistory.length - 1].winnigField : '',
    useQuery = () => new URLSearchParams(useLocation().search),
    query = useQuery();

  return (
    <>
     <Router>
        <br/>
        &nbsp;&nbsp;
        <Link to={"/history/LastWinningGame?winnigField=" + winnigField}>Last Winning Game</Link>

        <Switch>
          <Route exact path="/history">
            {gamesHistory}
          </Route>
          <Route path={"/history/LastWinningGame?winnigField=" + winnigField}>
            <XOGameField field={query.get("winnigField")}/>
          </Route>
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