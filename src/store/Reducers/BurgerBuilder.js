import * as actionTypes from '../Actions/ActionsTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
}

const burgerBuilderReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ADD_INGREDIENT: {
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: action.totalPrice,
                building: true
            }
        }
        case actionTypes.REMOVE_INGREDIENT: {
            return {
                ...state,
                ingredients: action.ingredients,
                totalPrice: action.totalPrice,
                building: true
            }
        }
        case actionTypes.SET_INGREDIENT: {
            return {
                ...state,
                ingredients: action.ingredients,
                error: false,
                building: false
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