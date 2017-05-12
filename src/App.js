import React, { Component } from 'react'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './screens/AuthScreen'
import HomeScreen from './screens/HomeScreen'
import NewRecordScreen from './screens/NewRecordScreen'
//import AccountScreen from './screens/AccountScreen'
import StatsScreen from './screens/StatsScreen'
import ProfileScreen from './screens/ProfileScreen'

import store from './store'

export default class App extends Component {
  render() {
    const HomeNavigator = StackNavigator({
      home: { screen: HomeScreen },
      newRecord: { screen: NewRecordScreen }
    }, {
      mode: 'modal'
    })

    const MainNavigator = TabNavigator({
      home: { screen: HomeNavigator },
      account: { screen: NewRecordScreen },
      stats: { screen: StatsScreen },
      profile: { screen: ProfileScreen },
    }, {
      tabBarOptions: {
        labelStyle: {
          fontSize: 12
        }
      }
    })

    const GlobalNavigator = TabNavigator({
      auth: { screen: AuthScreen },
      main: { screen: MainNavigator }
    }, {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    })
    return (
      <Provider store={store}>
        <GlobalNavigator />
      </Provider>
    )
  }
}
