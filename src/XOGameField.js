import React, {useState} from 'react';
import styled from 'styled-components';
import XOGameTitle from './XOGameTitle.js';

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
  const numRows = props.size[0],
        numCols = props.size[1];
  
  const field = [];

  for (let i = 0; i < numRows; i++) {
    let cols = [];
    for (let j = 0; j < numCols; j++) {
      cols.push(<Col key={'col-'+ i + j} onClick={props.move(i,j)}>{props.arr[i][j]}</Col>);
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