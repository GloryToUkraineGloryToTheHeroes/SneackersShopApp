import { CHECK_USER, CREATE_USER } from '../../types'

const initialState = {
    id: '0',
    users: []
}

export const userReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_USER:
            return {...state, id: action.payload.userId, users: [...state.users, action.payload]}
        case CHECK_USER:
            return {...state, id: action.payload.userId}
        default: return state
    }
}