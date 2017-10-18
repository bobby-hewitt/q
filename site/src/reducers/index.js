import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import setup from './setup'
import authenticate from './authenticate'
import user from './user'
import error from './error'
import admin from './admin'

export default combineReducers({
  routing: routerReducer,
  user,
  admin,
  setup,
  authenticate,
  error
}) 