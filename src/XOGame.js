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
  width: 320px;
  height: 300px;
  border-collapse: collapse;
  margin: 0 auto;
`; 
const Row = styled.tr`
`; 
const Col = styled.td`
  cursor: pointer;
  border: 1px solid #000;
`; 

function XOGame(props) {
  const [controlledTurn, setControlledTurn] = useState(1),
        [controlledBoard, setControlledBoard] = useState(new Array());

  let player = (controlledTurn) ? 'X' : '0';
  return (
    <Div>
      <Btn>Новая игра</Btn>
      <Title>
        Следующий ходит: 
        <TurnBlock>{player}</TurnBlock>
      </Title>

      <Field>
        <Row>
          <Col onClick={}></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Field>
    </Div>
  );
}




export default XOGame;