import React, {useState} from 'react';
import FormComp from './FormComp.js';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <form>
      <FormComp label='test label' value='some value'/>
      <input type='submit' value='Submit'/>
    </form>
    
  );
}

export default App;
