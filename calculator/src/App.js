import React, { Component } from 'react';

import DisplayBar from './DisplayBar/DisplayBar';
import Button from './Button/Button';

import './App.css';

class App extends Component {

  state = {
    displayValue : "0",
    buttons: [
      7, 8, 9, '+',
      4, 5, 6, '-',
      1, 2 , 3, '*',
      '.', '=', 0, '÷']
  }

  onButtonClick = (val) => {
    this.setState(
      {
        ...this.state,
        displayValue: this.state.displayValue+val
      }
    )
  }

  render() {
    return (
      <div className="App">
        <DisplayBar displayValue={ this.state.displayValue } />
        < br />
        { this.state.buttons.map( (val, index) => {
          return <Button key={ val } val={ val } click={ () => this.onButtonClick(val) } />
        } ) }
      </div>
    );
  }
}

export default App;
