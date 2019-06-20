import React, { Component } from 'react';

import DisplayBar from './DisplayBar/DisplayBar';
import Button from './Button/Button';

import './App.css';

class App extends Component {

  state = {
    displayValue : "0",
    buttons: [
      '7', '8', '9', '+',
      '4', '5', '6', '-',
      '1', '2' , '3', '*',
      '.', '=', '0', '÷']
  }

  onButtonClicked = (val) => {
    this.setState(
      {
        ...this.state,
        displayValue: this.state.displayValue+val
      }
    )
  }

  onDeleteButtonClicked = () => {
    this.setState(
      {
        ...this.state,
        displayValue: this.state.displayValue.substring( 0, this.state.displayValue.length-1 )
      }
    )
  }

  onResetButtonClicked = () => {
    this.setState(
      {
        ...this.state,
        displayValue: 0
      }
    )
  }

  render() {
    return (
      <div className="App">
        <DisplayBar displayValue={ this.state.displayValue } />
        <Button val='<-' click={ () => this.onDeleteButtonClicked() } />
        <Button val='AC' click={ () => this.onResetButtonClicked() } />
        < br />
        { this.state.buttons.map( (val, index) => {
          return <Button key={ val } val={ val } click={ () => this.onButtonClicked(val) } />
        } ) }
      </div>
    );
  }
}

export default App;
