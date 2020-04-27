import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  cursor: pointer;
  text-align: center;
  padding: 5px;
`; 

function XOGameResetter(props) {
  return (
    <>
      <Btn onClick={props.resetGame}>Новая игра</Btn>
    </>
  );
}




export default XOGameResetter;