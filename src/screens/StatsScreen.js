import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'react-native-elements'

class StatsScreen extends Component {

  static navigationOptions = {
    title: 'Stats',
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <Icon
          name={focused ? 'ios-stats' : 'ios-stats-outline'}
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
        <Text>StatsScreen</Text>
        <Text>StatsScreen</Text>
        <Text>StatsScreen</Text>
      </View>
    )
  }
}

export default StatsScreen
