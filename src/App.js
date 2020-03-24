import React, {useState} from 'react';
import FormComp from './FormComp.js';
import DatePicker from './DatePicker.js';
import styled from 'styled-components';

const Form = styled.form`
  display: block;
  text-align: center;
  margin: 25px auto;
  font-size: 24px;
`; 
const OutputDiv = styled.div`
  height: 25px;
  text-align: center;
  padding: 25px 0;
  border-bottom: 1px solid #000;
`; 



function App(props) {
  const [controlledValue, setControlledValue] = useState('some value');
  const [birthday, setBirthday] = useState(new Date().toISOString().split('T')[0]); // текущая дата как начальное значение
  //const isInvalid = isNaN(new Date(birthday)); // true для даты Invalid Date

  return (
    <>
      <DatePicker date={birthday} />
      <OutputDiv className="date-picker-output">{birthday}</OutputDiv>
      
      <Form>
        <FormComp label={'test label'} value={controlledValue} onChange={(e) => setControlledValue(e.target.value)} onClick={() => alert('onClick')}/>
        <input type='submit' value='Submit'/>
      </Form>
    </>
  );
}


export default App;
