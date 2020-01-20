import React, {useState} from 'react';
import FormComp from './FormComp.js';
import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <FormComp label='test label' value='some value'/>
  );
}

export default App;
