import { ACTIVE_TAB_BAR } from '../actions/Types'

const INIT_STATE = {
  identifier: 'home'
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIVE_TAB_BAR:
      return { ...state, identifier: action.payload }
    default:
      return state
  }
}
