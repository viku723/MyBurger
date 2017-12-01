import React from 'react';

import classes from './Modal.css';

import Aux from '../../../hoc/Auxx/Auxx';
import Backdrop from '../Backdrop/Backdrop';

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} closeModal={props.closeModal} />
            <div className={classes.Modal} style={{
                transform: props.show ? 'transformY(0)' : 'transformY(-100vh)',
                display: props.show ? 'block' : 'none'
            }}>
                {props.children}
            </div>
        </Aux>
    )
}

export default modal;