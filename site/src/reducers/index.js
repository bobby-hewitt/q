import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import setup from './setup'
import authenticate from './authenticate'
import user from './user'
import error from './error'
import admin from './admin'
import events from './events'
import investments from './investments'
import applicants from './applicants'
import members from './members'

export default combineReducers({
  routing: routerReducer,
  members,
  applicants,
  events,
  investments,
  user,
  admin,
  setup,
  authenticate,
  error
}) 