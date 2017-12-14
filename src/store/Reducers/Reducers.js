import burgerBuilderReducer from './BurgerBuilder';
import orderReducer from './Orders';
import authReducer from './Auth';

import { combineReducers } from 'redux';

const reducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
})

export default reducer;