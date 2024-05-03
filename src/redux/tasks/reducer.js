import taskActionTypes from './action-types'
const initialState =  {
    tasks: []
}

const taskReducer = (state = initialState, action) => {
    switch(action.type){
        case taskActionTypes.GET:
            return {currentUser: action.payload}
        case taskActionTypes.ADD:
            return {...state, tasks: [...state.tasks, action.payload]}
        case  taskActionTypes.UPDATE:
            return {currentUser: action.payload}
        case  taskActionTypes.DELETE:
            return {...state, tasks: state.tasks.filter(item => item.id === action.payload)}
        default:
        return state
    }
}

export default taskReducer