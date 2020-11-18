import { combineReducers } from 'redux'

import { clientsReducer } from './clientsReducer'
import { instructorsReducer } from './instructorsReducer'

export default combineReducers({
    clients: clientsReducer, inst: instructorsReducer
})