import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon } from 'react-native-elements'

import Home from '../components/Home'

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <Icon
          name={focused ? 'ios-home' : 'ios-home-outline'}
          type='ionicon'
          size={30}
          color={focused ? tintColor : 'gray'}
        />
      )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    )
  }
}

export default HomeScreen
