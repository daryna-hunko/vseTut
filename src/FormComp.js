import React from 'react';
import './FormComp.css';

class FormComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: this.props.value};
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
      return (
        <form>
          <label>
            {this.props.label}
            <input type="text" value={this.state.value} />
          </label>
          <input type="submit" value="Submit" onChange={this.handleSubmit}/>
        </form>
      );
    }
  }

export default FormComp;