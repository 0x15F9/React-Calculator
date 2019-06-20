import React from 'react';
import './DisplayBar.css';

const DisplayBar = (props) => {

    return(
        <div className="displayBar">
            {props.displayValue}
        </div>
    )
};

export default DisplayBar;