import React, { Component } from 'react'
import { Grid, Row } from 'react-native-elements'
import { Text } from 'react-native'

export default class Summary extends Component {
  render() {
    return (
      <Grid containerStyle={styles.gridStyle}>
        <Row containerStyle={styles.rowStyle}>
          <Text style={styles.labelStyle}>
            本月收入(￥)：
          </Text>
          <Text style={styles.valueStyle}>
            123456
          </Text>
        </Row>
        <Row containerStyle={styles.rowStyle}>
          <Text style={styles.labelStyle}>
            本月支出(￥)：
          </Text>
          <Text style={styles.valueStyle}>
            12345
          </Text>
        </Row>
      </Grid>
    )
  }
}

const styles = {
  gridStyle: {
    marginHorizontal: 30,
    marginVertical: 30,
    flex: 1
  },
  rowStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20
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
  }
}
