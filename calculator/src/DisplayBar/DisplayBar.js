import React from 'react';
import './DisplayBar.css';

const DisplayBar = (props) => {

    return(
        <div className="displayBar box has-background-white-ter	 is-full-width has-text-right has-text-weight-bold is-family-code has-text-success	">
            {props.displayValue}
        </div>
    )
};

export default DisplayBar;