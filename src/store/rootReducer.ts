import { combineReducers } from 'redux'
import contacts from '../pages/contacts/services/reducer'
import feedback from '../services/feedback/reducer'
import errors from '../services/errors/reducer'

const rootReducer = combineReducers({
  contacts,
  feedback,
  errors
})

export type RootReducer = ReturnType<typeof rootReducer>
export default rootReducer
