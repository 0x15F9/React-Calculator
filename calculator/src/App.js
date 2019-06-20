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

        {/* TODO: Move to Component */}
        <section class="hero is-primary">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Dumb Calculator
              </h1>
              <h2 class="subtitle">
                by Isfaaq G.
              </h2>
            </div>
          </div>
        </section>
        <br/>

        <div className="columns">
          <div className="column is-one-quarter"></div>

          <div className="column is-one-half">
            
            <div className="columns">

              <div className="column is-three-quarters">
                  <DisplayBar displayValue={ this.state.displayValue } />
              </div>

              <div className="column is-one-eights">
                <Button val='<-' click={ () => this.onSpecialButtonClicked('del') } css='is-danger' />
              </div>
              
              <div className="column is-one-eights">
                <Button val='AC' click={ () => this.onSpecialButtonClicked('AC') } css='is-danger' />
              </div>
              
            </div>

            
            <div className="columns"> 
              <div className="column is-three-quarters">
                <div className="columns is-multiline">
                  { this.state.numPad.map( (val, index) => {
                  return (
                    <div className="column is-one-third">
                      <Button key={ val } val={ val } click={ () => this.onNumpadButtonClicked(val) } css='is-primary is-outlined'/>
                    </div>
                  )
                  } ) }
                </div>
              </div>

              <div className="column is-one-quarter">

                <div className="columns is-multiline">
                  { this.state.operations.map( (val, index) => {
                    return (
                      <div className="column is-full">
                        <Button key={ val } val={ val } click={ () => this.onNumpadButtonClicked(val) } css='is-warning'/>
                      </div>
                    );
                  } ) }
                </div>
                
              </div>

            </div>

            <div className="column is-full">
                <Button val='=' click={ () => this.onSpecialButtonClicked('=') } css='is-success'/>
              </div>

          </div>

          <div className="column is-one-quarter"></div>
        </div>

        {/* TODO: Move to a Component */}
        <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Dumb Calculator</strong> by <a href="https://github.com/0x15F9">Isfaaq G.</a>
            <br/>
            This Calculator is powered by <a href="https://reactjs.org/">ReactJS</a>, <a href="https://bulma.io/">Bulma</a> and some dumb Calculation Logic.
          </p>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
