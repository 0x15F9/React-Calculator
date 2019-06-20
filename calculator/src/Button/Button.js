import React from 'react';

const Button = (props) => {
    return (
        <div className={"button is-fullwidth "+props.css} onClick={props.click} >
            {props.val}
        </div>
    )
};

export default Button;