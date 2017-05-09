import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

//import GLogin from './components/GLogin'
//import Main from './components/Main'

import AuthScreen from './screens/AuthScreen'
import HomeScreen from './screens/HomeScreen'
import AccountScreen from './screens/AccountScreen'
import StatsScreen from './screens/StatsScreen'
import ProfileScreen from './screens/ProfileScreen'

//import reducers from './reducers/'

export default class App extends Component {
  render() {
    const MainNavigator = TabNavigator({
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          home: { screen: HomeScreen },
          account: { screen: AccountScreen },
          stats: { screen: StatsScreen },
          profile: { screen: ProfileScreen },
        }, {
          tabBarOptions: {
            labelStyle: {
              fontSize: 12
            }
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    })
    return (
      <MainNavigator />
    )
  }
}
