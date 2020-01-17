import React from 'react';
import FormComp from './FormComp.js';
import logo from './logo.svg';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FormComp label='Test text' inputValue='Test value'/>
    );
  }
}

export default App;
