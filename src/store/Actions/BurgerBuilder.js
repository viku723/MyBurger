import * as actionTypes from './ActionsTypes';
import axios from '../../axios-orders';

export const addIngredient = (ingredients, totalPrice) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredients: ingredients,
        totalPrice: totalPrice
    }
}

export const removeIngredient = (ingredients, totalPrice) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredients: ingredients,
        totalPrice: totalPrice
    }
}

export const setIngredient = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENT,
        ingredients: ingredients
    }
}
export const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED
    }
}
export const initIngredient = () => {
    console.log('initIngredient')
    return dispatch => {
        axios.get('/ingredients.json').then((response) => {
            dispatch(setIngredient(response.data));
        })
        .catch(() => {
            dispatch(fetchIngredientFailed())
        })
    }
}