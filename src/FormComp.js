import React, {useState} from 'react';
import styled from 'styled-components';

const Label = styled.label`
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
    <Label>
      {props.label}
      <Input type="text" value={props.value} onChange={props.onChange}  {...props}/>
    </Label>
  );
}

export default FormComp;