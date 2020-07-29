import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  margin: 15px auto;
  color: red;
  font-size: .6em;
`; 

function XOGameWinnerBlock(props) {
  let winner;
  if (props.winner !== undefined) {
    (props.winner == 'X' || props.winner == 'O') ? winner = 'Победил ' + props.winner : winner = 'Ничья';
  }

  return (
    <>
      <Div>{winner}</Div>
    </>
  );
}

export default XOGameWinnerBlock;