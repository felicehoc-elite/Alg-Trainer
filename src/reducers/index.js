import { combineReducers } from 'redux'
import { reduxForm as form } from 'redux-form'

import user from './user'

export default combineReducers({
  user,
  form
})
