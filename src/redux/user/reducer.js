import userActionTypes from '../../redux/user/action-types'

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
    // if(action.type === userActionTypes.LOGIN) return {currentUser: action.payload}
    // if(action.type === userActionTypes.LOGOUT) return {currentUser: action.payload}
    // if(action.type === 'user/signin') return {currentUser: 10}
    // if(action.type === 'user/addNote') return {currentUser: 10}
    // if(action.type === 'user/editNote') return {currentUser: 10}
    // if(action.type === 'user/removeNote') return {currentUser: 10}
    // return state
}

export default userReducer