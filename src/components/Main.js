import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabBarIOS, Text, View } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import Home from './Home'
import Account from './Account'
import { activeTabBar } from '../actions/'

class Main extends Component {
  isActive(tab) {
    return this.props.currentTabBar.identifier === tab
  }

  renderTabContent() {
    switch (this.props.currentTabBar.identifier) {
      case 'home':
        return (
          <Home />
        )
      case 'account':
        return (
          <Account />
        )
      case 'stats':
        return (
          <View>
            <Text>
              Stats
            </Text>
          </View>
        )
      case 'person':
        return (
          <View>
            <Text>
              Person
            </Text>
          </View>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <TabBarIOS
        tinColor='white'
        barTinColor='darkslateblue'
        unselectedTinColor='yellow'
      >
        <Icon.TabBarItemIOS
          title="主页"
          iconName="ios-home-outline"
          selectedIconName="ios-home"
          selected={this.isActive('home')}
          onPress={() => this.props.activeTabBar('home')}
        >
          {this.renderTabContent()}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="账户"
          iconName="ios-card-outline"
          selectedIconName="ios-card"
          selected={this.isActive('account')}
          onPress={() => this.props.activeTabBar('account')}
        >
          {this.renderTabContent()}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="图表"
          iconName="ios-stats-outline"
          selectedIconName="ios-stats"
          selected={this.isActive('stats')}
          onPress={() => this.props.activeTabBar('stats')}
        >
          {this.renderTabContent()}
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          title="我"
          iconName="ios-person-outline"
          selectedIconName="ios-person"
          selected={this.isActive('person')}
          onPress={() => this.props.activeTabBar('person')}
        >
          {this.renderTabContent()}
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    )
  }
}

const mapStateToProps = ({ currentTabBar }) => {
  return {
    currentTabBar
  }
}

export default connect(mapStateToProps, {
  activeTabBar
})(Main)
