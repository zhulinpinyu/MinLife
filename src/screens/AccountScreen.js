import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

class AccountScreen extends Component {

  static navigationOptions = {
    title: 'Account',
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <Icon
          name={focused ? 'ios-card' : 'ios-card-outline'}
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
        <Text>AccountScreen</Text>
        <Text>AccountScreen</Text>
        <Text>AccountScreen</Text>
      </View>
    )
  }
}

export default AccountScreen
