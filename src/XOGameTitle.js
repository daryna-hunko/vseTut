import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  text-align: center;
  padding: 5px;
`; 
const TurnBlock = styled.span`
  margin-left: 5px;
`; 

function XOGameTitle(props) {
  return (
    <Title>
      Следующий ходит: 
      <TurnBlock>{props.player}</TurnBlock>
    </Title>
  );
}




export default XOGameTitle;