import React, {useState} from 'react';
import styled from 'styled-components';

const DropDown = styled.select`
  text-align: center;
  margin: 15px auto;
  display: block;
  width: 150px;
`; 
const Option = styled.option`
  text-align: center;
`; 
const Title = styled.p`
  text-align: center;
`; 

function CustomDropDown(props) {
    const numbers = props.items.map((el) => el);
    const listItems = numbers.map((number) =>
      <Option key={number} value={number}>{number}</Option>
    );
    document.addEventListener("DOMContentLoaded", () => {document.querySelector('.CustomDropDown').size = numbers.length;})
    return (
      <>
        <Title>Custom DropDown</Title>
        <DropDown className='CustomDropDown' onChange={props.onSelected}>
            {listItems}
        </DropDown>
      </>
    );
  }
  
  export default CustomDropDown;