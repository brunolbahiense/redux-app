import userActionTypes from './action-types'

const initialState =  {
    currentUser: ''
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case userActionTypes.SIGNUP:
            return {currentUser: action.payload}
        case userActionTypes.LOGIN:
            return {currentUser: action.payload}
        case  userActionTypes.LOGOUT:
            return {currentUser: action.payload}
        default:
        return state
    }
}

export default userReducer