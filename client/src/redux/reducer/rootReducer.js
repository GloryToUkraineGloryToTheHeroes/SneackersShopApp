import { combineReducers } from 'redux'
import { filterReducer } from './allReducers/filterReducer'
import { productReducer } from './allReducers/productReducer'
import { userReducer } from './allReducers/userReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    filter: filterReducer
})