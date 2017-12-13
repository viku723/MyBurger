import * as actionTypes from './ActionsTypes';
import axios from '../../axios-orders';

export const purchaseBurgeSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        id: id,
        orderData: orderData
    }
}

export const purchaseBurgeFailed = () => {
    return {
        type :actionTypes.PURCHASE_BURGER_FAILED
    }
}

export const purchaseBurgerStart = () => {
    return {
        type :actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post( '/orders.json', orderData )
        .then(response => {
            dispatch(purchaseBurgeSuccess(response.data, orderData))
        })
        .catch( error => {
            dispatch(purchaseBurgeFailed())
        });
    }
}

export const purchaseBurgerInit = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_INIT
    }
}