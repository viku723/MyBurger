import burgerBuilderReducer from './BurgerBuilder';
import orderReducer from './Orders';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
})

export default reducer;