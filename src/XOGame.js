import React, {useState} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 25px 0;
  font-size: 24px;
  border-bottom: 1px solid #000;
`; 
const Btn = styled.button`
  cursor: pointer;
  text-align: center;
  padding: 5px;
`; 
const Title = styled.div`
  text-align: center;
  padding: 5px;
`; 
const TurnBlock = styled.span`
  margin-left: 5px;
`; 
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

function XOGame(props) {
  const [controlledTurn, setControlledTurn] = useState(1),
        [controlledResult, setControlledResult] = useState(props.game);

  let player = (controlledTurn) ? 'X' : '0';
  let arr = controlledResult,
      addVal = (a, b) => {
        if (arr[a][b] === undefined) {
          arr[a][b] = player;
          toggleTurn();
          setControlledResult(arr);
        }
      },
      toggleTurn = () => (controlledTurn) ? setControlledTurn(0) : setControlledTurn(1),
      move = (a, b) => addVal(a, b),
      resetGame = () => {
        arr = [[,,,],[,,,],[,,,]]
        setControlledResult(arr);
        setControlledTurn(1);
      };


  return (
    <Div>
      <Btn onClick={() => resetGame()}>Новая игра</Btn>
      <Title>
        Следующий ходит: 
        <TurnBlock>{player}</TurnBlock>
      </Title>

      <Field>
        <tbody>
          <Row>
            <Col onClick={() => move(0,0)}>{arr[0][0]}</Col>
            <Col onClick={() => move(0,1)}>{arr[0][1]}</Col>
            <Col onClick={() => move(0,2)}>{arr[0][2]}</Col>
          </Row>
          <Row>
            <Col onClick={() => move(1,0)}>{arr[1][0]}</Col>
            <Col onClick={() => move(1,1)}>{arr[1][1]}</Col>
            <Col onClick={() => move(1,2)}>{arr[1][2]}</Col>
          </Row>
          <Row>
            <Col onClick={() => move(2,0)}>{arr[2][0]}</Col>
            <Col onClick={() => move(2,1)}>{arr[2][1]}</Col>
            <Col onClick={() => move(2,2)}>{arr[2][2]}</Col>
          </Row>
        </tbody>
      </Field>
    </Div>
  );
}




export default XOGame;