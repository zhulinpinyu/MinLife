import React, { Component } from 'react'

import GLogin from '../components/GLogin'

class AuthScreen extends Component {

  onUnlockSuccess = () => {
    this.props.navigation.navigate('account')
  }

  render() {
    return <GLogin onUnlockSuccess={this.onUnlockSuccess} />
  }
}

export default AuthScreen
