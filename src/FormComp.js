import React, {useState} from 'react';
import './FormComp.css';

function FormComp(props) {

  return (
    <label>
      {props.label}
      <input type="text" value={props.value} onChange={props.onChange} />
    </label>
  );
}

export default FormComp;