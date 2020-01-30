import React, {useState} from 'react';
import FormComp from './FormComp.js';
import styled from 'styled-components';

const Form = styled.form`
  display: block;
  text-align: center;
  margin: 25px auto;
  font-size: 24px;
`; 



function App(props) {
  const [controlledValue, setControlledValue] = useState('some value');
  return (
    <Form>
      <FormComp label={'test label'} value={controlledValue} onChange={(e) => setControlledValue(e.target.value)} onClick={() => alert('onClick')} onKeyDown={() => alert('onKeyDown')}/>
      <input type='submit' value='Submit'/>
    </Form>
    
  );
}

export default App;
