import React, { Component } from 'react'
import { Dimensions, View, Text, ScrollView } from 'react-native'
import { Button, List, ListItem } from 'react-native-elements'

const { height } = Dimensions.get('window')

export default class Home extends Component {

  render() {
    const items = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can', 'Simon', 'Harly', 12345, 'Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Emre Can', 'Simon', 'Harly', 12345]
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
            <Button
              title='记一笔'
              icon={{ name: 'ios-add-outline', type: 'ionicon' }}
            />
          </View>
          <ScrollView style={journal}>
            <List>
              {
                items.map((item, i) => {
                  return (
                    <ListItem
                      key={i}
                      title={item}
                      leftIcon={{ name: 'ios-person', type: 'ionicon' }}
                    />
                  )
                })
              }
            </List>
          </ScrollView>
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
    marginBottom: 0
  }
}
