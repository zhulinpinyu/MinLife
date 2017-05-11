import React, { Component } from 'react'
import { Button, Icon, Grid, Row, List, ListItem } from 'react-native-elements'
import { View, ScrollView } from 'react-native'

import Summary from '../components/Summary'

class HomeScreen extends Component {
  static navigationOptions = {
    header: null,
    tabBarIcon: ({ focused, tintColor }) => {
      return (
        <Icon
          name={focused ? 'ios-home' : 'ios-home-outline'}
          type='ionicon'
          size={30}
          color={focused ? tintColor : 'gray'}
        />
      )
    }
  }

  render() {
    const items = ['Simon Mignolet', 'Nathaniel Clyne']

    return (
      <Grid>
        <Row containerStyle={{ backgroundColor: '#F2BE45' }} size={3}>
          <Summary />
        </Row>
        <Row size={1}>
          <View style={{ flex: 1, marginTop: 5 }}>
            <Button
              title='记一笔'
              icon={{ name: 'md-add', type: 'ionicon', size: 30 }}
              backgroundColor='#03A9F4'
              textStyle={{ fontSize: 23, fontWeight: '800', marginHorizontal: 10 }}
              onPress={() => this.props.navigation.navigate('newRecord')}
            />
          </View>
        </Row>
        <Row size={10}>
          <ScrollView>
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
        </Row>
      </Grid>
    )
  }
}

export default HomeScreen
