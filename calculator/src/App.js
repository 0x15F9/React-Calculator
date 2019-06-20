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
    const newVal = ['0', 0, 'Infinity', Infinity, Error, 'ERROR'].indexOf(this.state.displayValue) !== -1 ? val : this.state.displayValue+val;
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
        if (this.state.displayValue.length > 1 || ['Infinity', Infinity, Error, 'ERROR'].indexOf(this.state.displayValue) !== -1 ) {
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
        let result = 'ERROR';
        try {
          result = eval(this.state.displayValue);
        } catch (error) {
          console.log(error);
        }

        this.setState(
          {
            ...this.state,
            displayValue: result
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
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                Dumb Calculator
              </h1>
              <h2 className="subtitle">
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
                <Button val='<-' click={ () => this.onSpecialButtonClicked('del') } css='is-rounded is-danger' />
              </div>
              
              <div className="column is-one-eights">
                <Button val='AC' click={ () => this.onSpecialButtonClicked('AC') } css='is-rounded is-danger' />
              </div>
              
            </div>

            
            <div className="columns"> 
              <div className="column is-three-quarters">
                <div className="columns is-multiline">
                  { this.state.numPad.map( (val, index) => {
                  return (
                    <div key={ val }  className="column is-one-third">
                      <Button key={ val } val={ val } click={ () => this.onNumpadButtonClicked(val) } css='is-primary is-outlined'/>
                    </div>
                  )
                  } ) }

                  <div className="column is-two-thirds">
                      <Button val='=' click={ () => this.onSpecialButtonClicked('=') } css='is-success'/>
                  </div>

                </div>

              </div>

              <div className="column is-one-quarter">

                <div className="columns is-multiline">
                  { this.state.operations.map( (val, index) => {
                    return (
                      <div  key={ val } className="column is-full">
                        <Button key={ val } val={ val } click={ () => this.onNumpadButtonClicked(val) } css='is-warning'/>
                      </div>
                    );
                  } ) }
                </div>
                
              </div>

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
