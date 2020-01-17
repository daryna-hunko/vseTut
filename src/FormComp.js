import React from 'react';
import './FormComp.css';

class FormComp extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <form>
          <label>
            {this.props.label}
            <input type="text" value={this.props.inputValue} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default FormComp;