import React, {useState} from 'react';
import styled from 'styled-components';
import SelectBuilder from './SelectBuilderComp.js';

const Div = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto;
  padding: 25px 0;
  font-size: 24px;
  border-bottom: 1px solid #000;
`; 


function DatePicker(props) {

  return (
    <Div>
      <div>
        <SelectBuilder className='date-select' numbers={props.Days}  />
        <SelectBuilder className='month-select' numbers={props.Monthes} />
        <SelectBuilder className='year-select' numbers={props.Years} onChange={props.onYearsChange} onFocus={props.onClick} />
      </div>
      <div className="date-picker-output"></div>
    </Div>
  );
}

function outputer(a, b, c) {
  //if (a.length != 0 && b.length != 0 && c.length != 0) {
    document.querySelector('.date-picker-output').innerText = a + ' ' + b + ' ' + c;
  //}
}



function daysInMonth (month, year) { // Use 1 for January, 2 for February, etc.
  return new Date(year, month, 0).getDate();
}
  
export default DatePicker;