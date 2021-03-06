import React from 'react';
import Aux from '../../../hoc/Auxx/Auxx';

import classes from './Button.css';
const button = (props) => {
    return(
        <Aux>
            <button onClick={props.clicked} className={[classes.Button, classes[props.btnType]].join(' ')} >
                {props.children}
            </button>
        </Aux>
    )
}

export default button;