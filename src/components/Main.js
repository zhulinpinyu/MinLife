import React, { Component } from 'react'

import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from 'native-base'

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Content />
        <Footer >
          <FooterTab>
            <Button active>
              <Icon name="ios-home" />
              <Text>主页</Text>
            </Button>
            <Button>
              <Icon name="ios-card-outline" />
              <Text>账户</Text>
            </Button>
            <Button>
              <Icon name="ios-stats-outline" />
              <Text>图表</Text>
            </Button>
            <Button>
              <Icon name="person" />
              <Text>我</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}
