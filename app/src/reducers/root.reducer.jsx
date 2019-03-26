import { combineReducers } from 'redux'

import roleReducer from './role.reducer'

export default combineReducers({
    role: roleReducer
})