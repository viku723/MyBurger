import React from 'react';
import logoSrc from '../../assets/images/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => {
    return(
        <div className={classes.Logo}>
            <img src={logoSrc} alt="logo" />
        </div>
    )
}

export default logo;