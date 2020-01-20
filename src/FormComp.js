import React, {useState} from 'react';
import './FormComp.css';

function FormComp(props) {
  const [label, setLabel] = useState(props.label);
  const [value, setValue] = useState(props.value);

  return (
    <form>
        <label>
          {label}
        </label>
        <input type="text" value={props.value} onChange={(e) => setValue(e.target.value)}/>
        <input type="submit" value="Submit"/>
    </form>
  );
}

export default FormComp;