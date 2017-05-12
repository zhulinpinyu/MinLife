import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ButtonGroup } from 'react-native-elements'

class NewRecordScreen extends Component {

  state = {
    selectedIndex: 0
  }

  updateIndex = (selectedIndex) => {
    this.setState({ selectedIndex })
  }

  renderForms() {
    switch (this.state.selectedIndex) {
      case 0:
        return <Text>支出</Text>
      case 1:
        return <Text>收入</Text>
      case 2:
        return <Text>转账</Text>
      default:
        return <Text>支出</Text>
    }
  }

  render() {
    const buttons = ['支出', '收入', '转账']
    const { selectedIndex } = this.state

    return (
      <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          selectedBackgroundColor='gray'
          buttons={buttons}
          containerStyle={{ height: 50 }}
        />
        {this.renderForms()}
      </View>
    )
  }
}

export default NewRecordScreen
