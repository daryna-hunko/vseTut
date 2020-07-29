import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: block;
  text-align: center;
  margin: 25px auto 0;
  font-size: 24px;
`; 
const Input = styled.input`
  display: block;
  width: 200px;
  margin: 15px auto;
`; 


function FormComp(props) {

  return (
    <>
      <Div onClick={props.onClick}>
        {props.label}
      </Div>
      <Input type="text" value={props.value} onChange={props.onChange}  {...props}/>
    </>
  );
}

export default FormComp;