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
  const Days = [];
  const Monthes = [1,2,3,4,5,6,7,8,9,10,11,12];
  const Years = [];
  const todayDate = new Date();
  for (let i = 1900; i < 2021; i++) {
    Years.push(i);
  }
  for (let i = 1; i <= 31; i++) {
    Days.push(i);
  }

  const [controlledValue, setControlledValue] = useState('some value');
  
  const [controlledDays, setControlledDays] = useState(todayDate.getDay()),
        [controlledMonthes, setControlledMonthes] = useState(todayDate.getMonth() + 1),
        [controlledYears, setControlledYears] = useState(todayDate.getFullYear());

  return (
    <>
      <DatePicker 
        Days={Days} 
        Monthes={Monthes} 
        Years={Years} 
        onDaysChange={(e) => setControlledDays(e.target.value)} 
        onMonthesChange={(e) => {setControlledMonthes(e.target.value)}} 
        onYearsChange={(e) => {setControlledYears(e.target.value); console.log(controlledYears)}} 
      
        onClick={()=> alert('onClick')}
      />
      <Form>
        <FormComp label={'test label'} value={controlledValue} onChange={(e) => setControlledValue(e.target.value)} onClick={() => alert('onClick')}/>
        <input type='submit' value='Submit'/>
      </Form>
    </>
  );
}

export default App;
