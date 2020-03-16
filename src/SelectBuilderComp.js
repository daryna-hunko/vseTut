import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
  margin: 0 10px;
`; 

function SelectBuilder(props) {
  const numbers = props.numbers;
  const emptyItem = <option key={'empty'}></option>;
  const optionItems = numbers.map((number) =>
    <option key={number.toString()} value={number}>{number}</option>
  );
  optionItems.unshift(emptyItem);
  return (
    <Select className={props.className}>
      {optionItems}
    </Select>
  );
}

export default SelectBuilder;