import React from 'react';

import Aux from '../../../hoc/Auxx/Auxx';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total price: {props.price} </strong></p>
            <p> Checkout to continue </p>
            <Button btnType="Danger" clicked={props.cancelPurchase} >Cancel</Button>
            <Button btnType="Success"clicked={props.purchaseContinue} >Continue</Button>
        </Aux>
    )
}

export default orderSummary;