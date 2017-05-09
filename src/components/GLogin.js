import React, { Component } from 'react'
import GesturePassword from 'react-native-gesture-password'

export default class GLogin extends Component {
  state = {
    message: '请输入手势密码解锁',
    status: 'normal',
    interval: 0
  }

  onEnd(password) {
    if (password === '1235789') {
      this.setState({
        status: 'right',
        message: '解锁🔓成功'
      })
      this.props.onUnlockSuccess()
    } else {
      this.setState({
        status: 'wrong',
        message: '解锁🔓失败，请重试',
        interval: 2000
      })
    }
  }

  onStart() {
    this.setState({
        status: 'normal',
        message: '请输入手势密码解锁'
    })
  }

  onReset() {
    //interval 设置为1.6秒 过时自动清理手势图案
    this.setState({
      status: 'normal',
      message: '请输入手势密码解锁'
    })
  }

  render() {
    return (
      <GesturePassword
        ref='pg'
        interval={this.state.interval}
        status={this.state.status}
        message={this.state.message}
        onStart={this.onStart.bind(this)}
        onEnd={this.onEnd.bind(this)}
        onReset={this.onReset.bind(this)}
      />
    )
  }
}
