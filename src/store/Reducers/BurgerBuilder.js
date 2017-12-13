import * as actionTypes from '../Actions/ActionsTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const burgerBuilderReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: action.totalPrice
            }
        }
        case actionTypes.REMOVE_INGREDIENT: {
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: action.totalPrice
            }
        }
        case actionTypes.SET_INGREDIENT: {
            return {
                ...state,
                ingredients: action.ingredients,
                error: false
            }
        }
        case actionTypes.FETCH_INGREDIENT_FAILED: {
            return {
                ...state,
                error: true
            }
        }
        default: {
            return state;
        }
    }
}

export default burgerBuilderReducer