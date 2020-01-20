import React, {useState} from 'react';
import './FormComp.css';

function FormComp(props) {


  return (
    <form>
        <label>
          {props.label}
        </label>
        <input type="text" value={props.value} />
        <input type="submit" value="Submit"/>
    </form>
  );
}

export default FormComp;