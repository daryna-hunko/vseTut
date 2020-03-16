import React, {useState} from 'react';
import styled from 'styled-components';
import SelectBuilder from './SelectBuilderComp.js';

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


function DatePicker(props) {

  return (
    <Div>
      <div>
        <SelectBuilder className='date-select' numbers={props.Days} onChange={props.onDaysChange} />
        <SelectBuilder className='month-select' numbers={props.Monthes} onChange={props.onMonthesChange}/>
        <SelectBuilder className='year-select' numbers={props.Years} onChange={props.onYearsChange} />
      </div>
      <OutputDiv className="date-picker-output"></OutputDiv>
    </Div>
  );
}


  
export default DatePicker;