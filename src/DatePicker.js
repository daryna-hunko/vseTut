import React, {useState} from 'react';
import styled from 'styled-components';
import SelectBuilder from './SelectBuilder.js';

const Div = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 25px 0;
  font-size: 24px;
  border-bottom: 1px solid #000;
`; 

const OutputDiv = styled.div`
  height: 25px;
  padding: 25px 0;
`; 

const Input = styled.input`
  margin-left: 10px;
`; 
const Label = styled.label`
  font-size: 14px;
`; 



function DatePicker(props) {
  const [controlledDays, setControlledDays] = useState(''),
        [controlledMonthes, setControlledMonthes] = useState(''),
        [controlledYears, setControlledYears] = useState('');
        //[controlledDate, setControlledDate] = useState('');
  let Days = [];
  const Monthes = [1,2,3,4,5,6,7,8,9,10,11,12];
  const Years = [];
  for (let i = 2020; i > 1900; i--) {
    Years.push(i);
  }
  for (let i = 1; i <= (daysInMonth(controlledMonthes, controlledYears) || 31); i++) {
    Days.push(i);
  }

  let Date = (validateDate(props.date)) ? props.date : '';
  

  return (
    <Div>
      <Label>
        Enter date or choose it: 
        <Input className="date-picker-input" placeholder="dd-mm-yyyy" onChange={(e) => {
          if (validateDate(e.target.value)) {
            //setControlledDate(e.target.value);
            document.querySelector('.date-picker-output').innerText = e.target.value;
          } else {
            alertErr();
          }
        }}/>
      </Label>

      <div>
        <SelectBuilder className='date-select' numbers={Days} onChange={(e) => {
          setControlledDays(e.target.value);
          outputer(e.target.value, controlledMonthes, controlledYears);
        }} />
        <SelectBuilder className='month-select' numbers={Monthes} onChange={(e) => {
          setControlledMonthes(e.target.value);
          outputer(controlledDays, e.target.value, controlledYears);
        }} />
        <SelectBuilder className='year-select' numbers={Years} onChange={(e) => {
          setControlledYears(e.target.value);
          outputer(controlledDays, controlledMonthes, e.target.value);
        }} />
      </div>
      <OutputDiv className="date-picker-output">{Date}</OutputDiv>
    </Div>
  );
}


function outputer(a, b, c) {
  if (a.length !== 0 && b.length !== 0 && c.length !== 0) {
    document.querySelector('.date-picker-output').innerText = a + ' ' + b + ' ' + c;
  } else {
    alertErr();
  }
}

function daysInMonth (month = 1, year = 2020) { // Use 1 for January, 2 for February, etc.
  return +(new Date(year, month, 0).getDate());
}

function validateDate(date) {
  let dateFormat = /^(0?[1-9]|[12][0-9]|3[01])[\-](0?[1-9]|1[012])[\-]\d{4}$/;
  if(date.match(dateFormat)) {
    const DateArr = date.split('-');

    if (DateArr[2] > 1900 && DateArr[2] <= 2020) {
      if (DateArr[1] > 0 && DateArr[1] <= 12) {
        if (DateArr[0] > 0 && DateArr[0] <= daysInMonth (DateArr[1], DateArr[2])) {
          return true;
        }
      }
    }
  }
  return false;
}

function alertErr() {
  document.querySelector('.date-picker-output').innerText = 'didn\`t get any valid data';
}
  
export default DatePicker;