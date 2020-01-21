import React, {useState} from 'react';
import FormComp from './FormComp.js';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [controlledValue, setControlledValue] = useState('some value');

  return (
    <form>
      <FormComp label='test label' value={controlledValue} onChange={(e) => setControlledValue(e.target.value)}/>
      <input type='submit' value='Submit'/>
    </form>
    
  );
}

export default App;
