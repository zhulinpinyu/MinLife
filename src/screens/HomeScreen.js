import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

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
      <View>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}

export default HomeScreen
