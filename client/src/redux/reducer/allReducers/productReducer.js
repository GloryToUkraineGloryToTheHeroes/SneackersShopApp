import { UPLOAD_PRODUCTS, UPLOAD_SINGLE_PRODUCT } from '../../types'

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch(action.type){
        case UPLOAD_PRODUCTS:
            return {...state, products: [...state.products, ...action.payload]}
        case UPLOAD_SINGLE_PRODUCT:
            return state
        default: return state
    }
}