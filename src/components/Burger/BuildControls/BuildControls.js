import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label:'Salad', type: 'salad' },
    { label:'Cheese', type: 'cheese' },
    { label:'Meat', type: 'meat' },
    { label:'Bacon', type: 'bacon' }
]
const buildControls = (props) => {
    return(
        <div className={classes.BuildControls}>
            <p>Current price: <strong>{props.price.toFixed(2)} </strong> </p>
            {controls.map((ctrl) => {
                return <BuildControl key={ctrl.label}
                                     label={ctrl.type}
                                     addIngredient = { () =>  props.addIngredient(ctrl.type)}
                                     removeIngredient = { () =>  props.removeIngredient(ctrl.type)} />
            })}
            <button disabled={!props.isPurchasable}
                    className={classes.OrderButton}
                    onClick={props.purchasing} >ORDER NOW</button>
        </div>
    )
}

export default buildControls;