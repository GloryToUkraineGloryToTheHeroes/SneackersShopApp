import { ADD_REMOVE_MANUFACTURER, DELETE_MANUFACTURERS, MANUFACTURERS_PRICE_ASCENDING, MANUFACTURERS_PRICE_DESCENDING, UPLOAD_MANUFACTURERS } from '../../types'

const initialState = {
    manufacturers: [],
    products: [],
    ready: false
}

export const filterReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_REMOVE_MANUFACTURER:
            if(state.manufacturers.indexOf(action.payload) > -1){
                state.manufacturers.splice(state.manufacturers.indexOf(action.payload), 1)
                return state
            }else{
                return {...state, manufacturers: [...state.manufacturers, action.payload]}
            }
        case DELETE_MANUFACTURERS:
            return {...state, manufacturers: [], products: []}
        case UPLOAD_MANUFACTURERS:
            return {...state, products: [...state.products, ...action.payload]}
        case MANUFACTURERS_PRICE_ASCENDING:
            return {...state, products: [...action.payload]}
        case MANUFACTURERS_PRICE_DESCENDING:
            return {...state, products: [...action.payload]}
        default: return state
    }
}