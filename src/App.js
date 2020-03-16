import React, {useState} from 'react';
import FormComp from './FormComp.js';
import DatePicker from './DatePickerComp.js';
import styled from 'styled-components';

const Form = styled.form`
  display: block;
  text-align: center;
  margin: 25px auto;
  font-size: 24px;
`; 




function App(props) {
  let Days = [];
  const Monthes = [1,2,3,4,5,6,7,8,9,10,11,12];
  const Years = [];
  const [controlledValue, setControlledValue] = useState('some value');
  
  const [controlledDays, setControlledDays] = useState(''),
        [controlledMonthes, setControlledMonthes] = useState(''),
        [controlledYears, setControlledYears] = useState('');
        
  for (let i = 2020; i > 1900; i--) {
    Years.push(i);
  }
  for (let i = 1; i <= (daysInMonth(controlledMonthes, controlledYears) || 31); i++) {
    Days.push(i);
  }


  return (
    <>
      <DatePicker 
        Days={Days} 
        Monthes={Monthes} 
        Years={Years} 
        onDaysChange={(e) => {
          setControlledDays(e.target.value);
          outputer(e.target.value, controlledMonthes, controlledYears);
        }} 
        onMonthesChange={(e) => {
          setControlledMonthes(e.target.value);
          outputer(controlledDays, e.target.value, controlledYears);
        }} 
        onYearsChange={(e) => {
          setControlledYears(e.target.value);
          outputer(controlledDays, controlledMonthes, e.target.value);
        }} 
      />
      <Form>
        <FormComp label={'test label'} value={controlledValue} onChange={(e) => setControlledValue(e.target.value)} onClick={() => alert('onClick')}/>
        <input type='submit' value='Submit'/>
      </Form>
    </>
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

export default App;
