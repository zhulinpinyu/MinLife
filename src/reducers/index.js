import { combineReducers } from 'redux';

import NavReducer from './NavReducer'

export default combineReducers({
  currentTabBar: NavReducer
})
