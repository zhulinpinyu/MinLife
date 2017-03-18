import React, { Component } from 'react'
import { Dimensions, View } from 'react-native'
import {
  Button,
  Icon,
  Text,
  List,
  ListItem,
  Body,
  Left,
  Right,
  Thumbnail
} from 'native-base'

const { height } = Dimensions.get('window')

export default class Home extends Component {

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
    const {
      container,
      overview,
      overviewBody,
      overviewBodyItem,
      labelStyle,
      valueStyle,
      body,
      addButton,
      journal
    } = styles

    return (
      <View style={container}>
        <View style={overview}>
          <View style={overviewBody}>
            <View style={overviewBodyItem}>
              <Text style={labelStyle}>
                本月收入(￥)：
              </Text>
              <Text style={valueStyle}>
                123456
              </Text>
            </View>
            <View style={overviewBodyItem}>
              <Text style={labelStyle}>
                本月支出(￥)：
              </Text>
              <Text style={valueStyle}>
                12345
              </Text>
            </View>
          </View>
        </View>
        <View style={body}>
          <View style={addButton}>
            <Button iconLeft block success>
                <Icon name='ios-add-outline' />
                <Text>
                  记一笔
                </Text>
            </Button>
          </View>
          <View style={journal}>
            <List
              dataArray={items}
              renderRow={this.renderRow}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'column',
    height: height - 50
  },
  overview: {
    flex: 2,
    backgroundColor: '#F2BE45',
    flexDirection: 'column'
  },
  overviewBody: {
    marginHorizontal: 30,
    marginVertical: 30,
    flex: 1
  },
  overviewBodyItem: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 23,
    fontWeight: '800',
    fontFamily: 'PingFangHK-Semibold'
  },
  valueStyle: {
    marginHorizontal: 10,
    fontSize: 20,
    color: '#14668a',
    fontFamily: 'ChalkboardSE-Bold'
  },
  body: {
    flex: 7,
    //backgroundColor: '#badcba'
  },
  addButton: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  journal: {
    marginBottom: 66
  }
}
