import React, { Component } from 'react'
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

export default class Main extends Component {
  state = {
    activeTab: 'home'
  }

  isActive(tab) {
    return this.state.activeTab === tab
  }

  renderTabScreen() {
    switch (this.state.activeTab) {
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
      <Container style={styles.container}>
        <Content>
          {this.renderTabScreen()}
        </Content>
        <Footer >
          <FooterTab>
            <Button
              active={this.state.activeTab === 'home'}
              style={styles.tabBtn}
              onPress={() => this.setState({ activeTab: 'home' })}
            >
              <Icon
                name={this.isActive('home') ? 'ios-home' : 'ios-home-outline'}
              />
              <Text>主页</Text>
            </Button>
            <Button
              active={this.state.activeTab === 'account'}
              style={styles.tabBtn}
              onPress={() => this.setState({ activeTab: 'account' })}
            >
              <Icon
                name={this.isActive('account') ? 'ios-card' : 'ios-card-outline'}
              />
              <Text>账户</Text>
            </Button>
            <Button
              active={this.state.activeTab === 'stats'}
              style={styles.tabBtn}
              onPress={() => this.setState({ activeTab: 'stats' })}
            >
              <Icon
                name={this.isActive('stats') ? 'ios-stats' : 'ios-stats-outline'}
              />
              <Text>图表</Text>
            </Button>
            <Button
              active={this.state.activeTab === 'person'}
              style={styles.tabBtn}
              onPress={() => this.setState({ activeTab: 'person' })}
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
