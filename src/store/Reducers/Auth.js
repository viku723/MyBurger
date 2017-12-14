import * as actionTypes from '../Actions/ActionsTypes';

const initialState = {
    error: null,
    loading: false,
    idToken: null,
    localId:null,
    authRedirect: '/'
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.AUTH_SUCESS: {
            return {
                ...state,
                loading: false,
                idToken: action.idToken,
                localId: action.localId,
                error: null
            }
        }
        case actionTypes.AUTH_START: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case actionTypes.AUTH_FAILED: {
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }

        case actionTypes.AUTH_LOGOUT: {
            return {
                ...state,
                idToken: null,
                localId: null
            }
        }
        case actionTypes.SET_AUTH_REDIRECT: {
            return {
                ...state,
                authRedirect: action.path
            }
        }
        default: {
            return state
        }
    }
}

export default reducer;