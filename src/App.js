import React, {useState} from 'react';
import FormComp from './FormComp.js';
import DatePicker from './DatePicker.js';
import XOGame from './XOGame.js';
import CustomDropDown from './customDropDown.js';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './redux/store.js';

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
 
const Option = styled.li`
  text-align: center;
  cursor: pointer;
  &:hover {
    background: rgba(0,0,0,.3);
  }
`; 


function App(props) {
  const [controlledValue, setControlledValue] = useState('some value');
  const [birthday, setBirthday] = useState(new Date().toISOString().split('T')[0]); // текущая дата как начальное значение
  //const isInvalid = isNaN(new Date(birthday)); // true для даты Invalid Date
  const xosize = [[,,,],[,,,],[,,,]];
  const [controlledGameResult, setControlledGameResult] = useState(xosize);
  const customDropDownData = ['str1','str2','str3','str4','str5','str6','str7','str8','str9','str10','str11','str12','str13','str14','str15',];
  

  return (
    <>
      <Provider store={store}>
        <XOGame game={controlledGameResult}  newGame={xosize}/>
      </Provider>

      <CustomDropDown items={customDropDownData} myRenderItem={(el, i, func) => <Option key={i} value={el} onClick={func}>{el}</Option>} />

      <DatePicker date={birthday} onChange={(data) => setBirthday(data)}/>
      <OutputDiv className="date-picker-output">{birthday}</OutputDiv>

      <Form>
        <FormComp label={'test label'} value={controlledValue} onChange={(e) => setControlledValue(e.target.value)} onClick={() => alert('onClick')}/>
        <input type='submit' value='Submit'/>
      </Form>
      
    </>
  );
}


export default App;
