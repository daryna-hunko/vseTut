import React, {useState} from 'react';
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
  const [controlledArr, setControlledArr] = useState(props.arr.map(el => [...el]));
  const numRows = props.size[0],
        numCols = props.size[1];
  
  const field = [],
        resetArr = props.newGame.map(el => [...el]);
  
  let move = (a, b) => addVal(a, b),
      arr = (props.reset) ? resetArr.concat() : controlledArr,
      addVal = (a, b) => {
        if (arr[a][b] === undefined && props.preventClicks === undefined) {
          arr[a][b] = props.player;

          let winnerCheck = winner3x3(arr);
          if (winnerCheck !== undefined) props.returnWinner(winnerCheck);

          props.toggleTurn();
          setControlledArr(arr);
          props.returnArr(arr,winnerCheck,0);
        }
      },
      winner3x3 = (someArr) => {
        if (someArr[0][0]!== undefined) {
          if (someArr[0][0] == someArr[1][0] && someArr[1][0] == someArr[2][0]) return someArr[0][0];
          if (someArr[0][0] == someArr[0][1] && someArr[0][1] == someArr[0][2]) return someArr[0][0];
          if (someArr[0][0] == someArr[1][1] && someArr[1][1] == someArr[2][2]) return someArr[0][0];
        }
        if (someArr[0][2]!== undefined) {
          if (someArr[0][2] == someArr[1][2] && someArr[1][2] == someArr[2][2]) return someArr[0][2];
          if (someArr[0][2] == someArr[1][1] && someArr[1][1] == someArr[2][0]) return someArr[0][2];
        }
        if (someArr[0][1]!== undefined && someArr[0][1] == someArr[1][1] && someArr[1][1] == someArr[2][1]) {
          return someArr[0][1];
        }
        if (someArr[1][0]!== undefined && someArr[1][0] == someArr[1][1] && someArr[1][1] == someArr[1][2]) {
          return someArr[1][0];
        }
        if (someArr[2][0]!== undefined && someArr[2][0] == someArr[2][1] && someArr[2][1] == someArr[2][2]) {
          return someArr[2][0];
        }
        
        return undefined;
      };
   
  for (let i = 0; i < numRows; i++) {
    let cols = [];
    for (let j = 0; j < numCols; j++) {
      let clickPosition = [i, j];
      cols.push(<Col key={'col-'+ i + j} onClick={() => move(clickPosition[0], clickPosition[1])}>{arr[i][j]}</Col>);
    }
    field.push(<Row key={'row-' + i}>{cols}</Row>);
  }

  return (
      <Field>
        <tbody>
          {field}
        </tbody>
      </Field>
  );
}


export default XOGameField;