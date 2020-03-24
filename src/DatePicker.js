import React, {useState} from 'react';
import styled from 'styled-components';
import SelectBuilder from './SelectBuilder.js';

const Div = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 25px 0;
  font-size: 24px;
`; 



function DatePicker(props) {
  let bday = props.date.split('-');
  const [controlledDays, setControlledDays] = useState(bday[2]),
        [controlledMonthes, setControlledMonthes] = useState(bday[1]),
        [controlledYears, setControlledYears] = useState(bday[0]);
  let Days = [];
  const Monthes = ['01','02','03','04','05','06','07','08','09','10','11','12'];
  const Years = [];
  for (let i = 2020; i > 1900; i--) {
    Years.push(i);
  }
  for (let i = 1; i <= (daysInMonth(controlledMonthes, controlledYears) || 31); i++) {
    (i < 10) ? Days.push('0' + i) : Days.push(i);
  }

  return (
    <Div>
      <div>
        <SelectBuilder className='date-select' numbers={Days} onChange={(e) => {
          setControlledDays(e.target.value);
          outputer(controlledYears,  controlledMonthes, e.target.value);
        }} />
        <SelectBuilder className='month-select' numbers={Monthes} onChange={(e) => {
          setControlledMonthes(e.target.value);
          outputer(controlledYears, e.target.value, controlledDays);
        }} />
        <SelectBuilder className='year-select' numbers={Years} onChange={(e) => {
          setControlledYears(e.target.value);
          outputer(e.target.value, controlledMonthes, controlledDays);
        }} />
      </div>
    </Div>
  );
}


function outputer(a, b, c) {
  if (a.length !== 0 && b.length !== 0 && c.length !== 0) {
    document.querySelector('.date-picker-output').innerText = a + ' ' + b + ' ' + c;
  }
}

function daysInMonth (month = 1, year = 2020) { // Use 1 for January, 2 for February, etc.
  return +(new Date(year, month, 0).getDate());
}

  
export default DatePicker;