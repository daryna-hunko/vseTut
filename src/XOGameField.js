import React, {useState} from 'react';
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
  const numRows = props.currentStore.gameField.length,
        numCols = props.currentStore.gameField[0].length;
  const field = [],
        currentGameField = props.currentStore.gameField;

  let history = () => {
                    let historyArr = [...props.currentStore.gamesHistory],
                    date = new Date();
                    historyArr.push(date + ' winner: ' +  props.currentStore.nextPlayer)
                    return historyArr;
                  } 
   
  for (let i = 0; i < numRows; i++) {
    let cols = [];
    for (let j = 0; j < numCols; j++) {
      let clickPosition = [i, j];
      cols.push(<Col 
                  key={'col-'+ i + j} 
                  onClick={() => {
                                  if (currentGameField[clickPosition[0]][clickPosition[1]] === undefined && props.currentStore.winner === undefined) {
                                      currentGameField[clickPosition[0]][clickPosition[1]] = props.currentStore.nextPlayer; 
                                      props.onClickEvent(currentGameField, history());
                                  }
                                }
                          }
                  >{props.currentStore.gameField[i][j]}
                </Col>);
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
    currentStore: state
  }),
  dispatch => ({
    onClickEvent: (currentGameField, history) => dispatch({type: 'NEXT_TURN', arr: currentGameField, gamesHistory: history})
  })
)(XOGameField);