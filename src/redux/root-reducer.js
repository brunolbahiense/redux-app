import {combineReducers} from 'redux'
import userReducer from './user/reducer'
import taskReducer from './tasks/reducer'

const rootReducer = combineReducers({userReducer, taskReducer})

export default rootReducer