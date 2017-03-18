import React, { Component } from 'react'

import {
  Text,
  List,
  ListItem,
  Body,
  Left,
  Right,
  Thumbnail
} from 'native-base'

export default class Account extends Component {

  renderRow(data) {
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail />
        </Left>
        <Body>
          <Text>{data}</Text>
          <Text note>
            Doing what you like will always keep you happy . .
          </Text>
        </Body>
        <Right>
          <Text note>3:43 pm</Text>
        </Right>
      </ListItem>
    )
  }

  render() {
    const items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can', 'Simon', 'Harly', 12345]

    return (
      <List
        dataArray={items}
        renderRow={this.renderRow}
      />
    )
  }
}
