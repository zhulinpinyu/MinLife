import { ACTIVE_TAB_BAR } from './Types'

export const activeTabBar = (bar) => {
  return {
    type: ACTIVE_TAB_BAR,
    payload: bar
  }
}
