import React from 'react';
import Aux from '../../hoc/Auxx/Auxx';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <Aux>
            <div>SideBar....</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;