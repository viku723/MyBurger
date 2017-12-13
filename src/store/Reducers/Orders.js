import * as actionTypes from '../Actions/ActionsTypes';

const initialState = {
    orders: [],
    loading: false,
    isPurchaseStart: false
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS: {
            const newOrder = {
                ...action.orderData,
                id: action.id
            }
            return {
                ...state,
                orders: state.orders.concat(newOrder),
                loading: false
            }
        }
        case actionTypes.PURCHASE_BURGER_FAILED: {
            return {
                ...state,
                loading: false
            }
        }
        case actionTypes.PURCHASE_BURGER_START: {
            return {
                ...state,
                loading: true
            }
        }
        case actionTypes.PURCHASE_BURGER_INIT: {
            return {
                ...state,
                isPurchaseStart: true
            }
        }
        default: {
            return state;
        }
    }
}

export default ordersReducer