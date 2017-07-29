import { combineReducers } from 'redux'
import { reduxForm as form } from 'redux-form'

import algs from './algs'
import user from './user'

export default combineReducers({
  user,
  algs,
  form
})
