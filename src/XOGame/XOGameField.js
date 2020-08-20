import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Field = styled.table`
  width: 321px;
  height: 300px;
  border-collapse: collapse;
  margin: 0 auto;
`; 
const Row = styled.tr`
`; 
const Col = styled.td`
  cursor: pointer;
  border: 1px solid #000;
  width: 107px;
  height: 100px;
`; 

function XOGameField(props) {
  const numRows = props.gameField.length,
        numCols = props.gameField[0].length;
  const field = [],
        currentGameField = props.gameField;

  for (let i = 0; i < numRows; i++) {
    let cols = [];
    for (let j = 0; j < numCols; j++) {
      let clickPosition = [i, j];
      if (props.location == undefined) {
        cols.push(
          <Col key={'col-'+ i + j} 
              onClick={() => {
                if (currentGameField[clickPosition[0]][clickPosition[1]] === undefined && props.winner === undefined) {
                    currentGameField[clickPosition[0]][clickPosition[1]] = props.nextPlayer; 
                    props.onClickEvent(currentGameField)
                  }
                }
              }
          >
            {props.gameField[i][j]}
          </Col>);
      } else {
        cols.push(
          <Col key={'col-'+ i + j}>
            {props.location.location.state.field[i][j]}
          </Col>);
      }
    }
    field.push(<Row key={'row-' + i}>{cols}</Row>);
  }

  return (
    <>
      <Field>
        <tbody>
          {field}
        </tbody>
      </Field>
    </>
  );
}

export default connect(
  state => ({
    gameField: state.gameField,
    winner: state.winner,
    nextPlayer: state.nextPlayer
  }),
  dispatch => ({
    onClickEvent: (currentGameField) => dispatch({type: 'NEXT_TURN', arr: currentGameField})
  })
)(XOGameField);