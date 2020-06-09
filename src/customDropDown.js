import React, {useState} from 'react';
import styled from 'styled-components';

const DropDown = styled.div`
  text-align: center;
  margin: 15px auto;
  width: 150px;
  border: 1px solid #ccc;
  height: 25px;
  overflow-y: hidden;
  &.open {
    height: 100px;
    overflow-y: scroll;
  }
`; 
const Option = styled.div`
  text-align: center;
  border-bottom: 1px solid #ccc;
  padding: 2px 0;
  &:last-child {
    border-bottom: none;
  }
  ${DropDown.open} &:hover {
    background: #ccc;
  }
`; 
const Title = styled.p`
  text-align: center;
`; 

function CustomDropDown(props) {
    const numbers = props.items.map((el) => el);
    const listItems = numbers.map((number) =>
      <Option key={number} value={number}>{number}</Option>
    );
    
    return (
      <>
        <Title>Custom DropDown</Title>
        <DropDown className='closed' onChange={props.onSelected}>
            {listItems}
        </DropDown>
      </>
    );
  }
  
  export default CustomDropDown;