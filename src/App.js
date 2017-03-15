import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//import GLogin from './components/GLogin'
import Main from './components/Main'

import reducers from './reducers/'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)} >
        <Main />
      </Provider>
    )
  }
}
