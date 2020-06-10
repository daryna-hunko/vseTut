import React, {useState} from 'react';
import styled from 'styled-components';

const DropDownWrap = styled.div`
  margin: 0 auto 25px;
  height: 23px;
  width: 200px;
  overflow: hidden;
  position: relative;
  &:hover {
    overflow: visible;
    .DropDownList {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
  }
`; 
const DropDownHeader = styled.div`
  text-align: center;
  border: 1px solid #ccc;
  cursor: pointer;
`; 
const DropDownTitle = styled.div`
  text-align: center;
`; 
const DropDownList = styled.ul`
  text-align: center;
  list-style: none;
  border: 1px solid #ccc;
  border-top: none;
  margin: 0;
  padding: 0;
  background: #fff;
`; 
const Option = styled.li`
  text-align: center;
  cursor: pointer;
  &:hover {
    background: rgba(0,0,0,.3);
  }
`; 
const Title = styled.p`
  text-align: center;
`; 

function CustomDropDown(props) {
    const [checkedValue, setCheckedValue] = useState('Select value');
    const numbers = props.items.map((el) => el);
    const listItems = numbers.map((number, i) =>
      <Option key={i} value={number} onClick={()=> setCheckedValue(number)}>{number}</Option>
    );

    
    return (
      <>
        <Title>Custom DropDown</Title>
        <DropDownWrap>
          <DropDownHeader>
            <DropDownTitle>{checkedValue}</DropDownTitle>
          </DropDownHeader>
          <DropDownList>
            {listItems}
          </DropDownList>
        </DropDownWrap>
      </>
    );
  }
  
  export default CustomDropDown;