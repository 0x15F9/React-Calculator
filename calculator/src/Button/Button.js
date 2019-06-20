import React from 'react';

const Button = (props) => {
    return (
        <div className="button" onClick={props.click} >
            {props.val}
        </div>
    )
};

export default Button;