import React, { Component } from 'react'
import { Dimensions, View, Text } from 'react-native'

const { height } = Dimensions.get('window')

export default class Home extends Component {
  render() {
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
            <Text>
              +
            </Text>
          </View>
          <View style={journal}>
            <Text>
              List
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flexDirection: 'column',
    height
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
    fontSize: 20,
    color: '#14668a',
    fontFamily: 'ChalkboardSE-Bold'
  },
  body: {
    flex: 7
  },
  addButton: {

  },
  journal: {

  }
}
