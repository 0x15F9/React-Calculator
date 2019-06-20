import React, { Component } from 'react';

import DisplayBar from './DisplayBar/DisplayBar';
import Button from './Button/Button';

import './App.css';

class App extends Component {

  state = {
    displayValue : "0",
    numPad: [
      '7', '8', '9',
      '4', '5', '6',
      '1', '2', '3',
      '0'],
    operations: ['+', '-', '*', '/']
  }

  onNumpadButtonClicked = (val) => {
    const newVal = this.state.displayValue=='0' ? val : this.state.displayValue+val;
    this.setState(
      {
        ...this.state,
        displayValue: newVal
      }
    )
  }

  onSpecialButtonClicked = (val) => {
    switch (val) {
      case 'del':
        if (this.state.displayValue.length > 1) {
          this.setState(
            {
              ...this.state,
              displayValue: this.state.displayValue.substring( 0, this.state.displayValue.length-1 )
            }
          );
        } else {
          this.onSpecialButtonClicked('AC');
        }
        break;
        case 'AC':
          this.setState(
            {
              ...this.state,
              displayValue: 0
            }
          );
          break;
      case '=':
        this.setState(
          {
            ...this.state,
            displayValue: eval(this.state.displayValue)
          }
        );
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div className="App">
        <DisplayBar displayValue={ this.state.displayValue } />
        <Button val='<-' click={ () => this.onSpecialButtonClicked('del') } />
        <Button val='AC' click={ () => this.onSpecialButtonClicked('AC') } />
        < br />
        { this.state.numPad.map( (val, index) => {
          return <Button key={ val } val={ val } click={ () => this.onNumpadButtonClicked(val) } />
        } ) }
        <br />
        { this.state.operations.map( (val, index) => {
          return <Button key={ val } val={ val } click={ () => this.onNumpadButtonClicked(val) } />
        } ) }
        <br />
        <Button val='=' click={ () => this.onSpecialButtonClicked('=') } />
      </div>
    );
  }
}

export default App;
