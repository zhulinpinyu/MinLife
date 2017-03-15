import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon
} from 'native-base'

import Home from './Home'
import { activeTabBar } from '../actions/'

class Main extends Component {

  isActive(tab) {
    return this.props.currentTabBar.identifier === tab
  }

  renderTabScreen() {
    switch (this.props.currentTabBar.identifier) {
      case 'home':
        return (
          <Home />
        )
      case 'account':
        return (
          <View>
            <Text>
              account
            </Text>
          </View>
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
      <Container>
        <Content>
          {this.renderTabScreen()}
        </Content>
        <Footer >
          <FooterTab>
            <Button
              active={this.isActive('home')}
              style={styles.tabBtn}
              onPress={() => this.props.activeTabBar('home')}
            >
              <Icon
                name={this.isActive('home') ? 'ios-home' : 'ios-home-outline'}
              />
              <Text>主页</Text>
            </Button>
            <Button
              active={this.isActive('account')}
              style={styles.tabBtn}
              onPress={() => this.props.activeTabBar('account')}
            >
              <Icon
                name={this.isActive('account') ? 'ios-card' : 'ios-card-outline'}
              />
              <Text>账户</Text>
            </Button>
            <Button
              active={this.isActive('stats')}
              style={styles.tabBtn}
              onPress={() => this.props.activeTabBar('stats')}
            >
              <Icon
                name={this.isActive('stats') ? 'ios-stats' : 'ios-stats-outline'}
              />
              <Text>图表</Text>
            </Button>
            <Button
              active={this.isActive('person')}
              style={styles.tabBtn}
              onPress={() => this.props.activeTabBar('person')}
            >
              <Icon
                name={this.isActive('person') ? 'ios-person' : 'ios-person-outline'}
              />
              <Text>我</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

const styles = {
  container: {
    paddingTop: 10
  },
  tabBtn: {
    borderRadius: 0
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
