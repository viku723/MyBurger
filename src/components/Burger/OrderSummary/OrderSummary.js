import React from 'react';

import Aux from '../../../hoc/Auxx/Auxx';

const orderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients)
        .map((ingKey) => {
            return <li key={ingKey} > 
            <span style={{'textTransform': 'capitalize'}} >{ingKey} </span> : {props.ingredients[ingKey]} 
            </li>
        })
    return(
        <Aux>
            <p>Your Order summary</p>
            <div> ingredients:
                <ul>
                    {ingredients}
                </ul>
            </div>
            <p> Checkout to continue </p>
        </Aux>
    )
}

export default orderSummary;