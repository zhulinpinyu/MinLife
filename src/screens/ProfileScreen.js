import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

class ProfileScreen extends Component {

  static navigationOptions = {
    title: 'Me',
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <Icon
          name={focused ? 'ios-person' : 'ios-person-outline'}
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
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
        <Text>ProfileScreen</Text>
      </View>
    )
  }
}

export default ProfileScreen
