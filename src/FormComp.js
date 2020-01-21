import React, {useState} from 'react';
import './FormComp.css';

function FormComp(props) {

  return (
    <label>
      {props.label}
      <input type="text" value={props.value} />
    </label>
  );
}

export default FormComp;