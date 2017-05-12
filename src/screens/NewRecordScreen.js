import React, { Component } from 'react'
import { View } from 'react-native'
import t from 'tcomb-form-native'
import moment from 'moment'

class NewRecordScreen extends Component {

  state = {
    text: null
  }

  render() {
    const Person = t.struct({
      type: t.enums({
        payment: '支出',
        income: '收入',
        transfer: '转账'
      }),
      money: t.Number,
      category: t.String,
      account: t.Number,
      members: t.enums({
        brj: 'LaoPo',
        mlx: 'LaoGong',
        home: 'Home'
      }),
      createdAt: t.Date,
      notes: t.String
    });

    const options = {
      fields: {
        type: {
          label: '账目类型',
          nullOption: false
        },
        money: {
          label: '金额'
        },
        category: {
          label: '类别'
        },
        account: {
          label: '账户'
        },
        members: {
          label: '成员',
          nullOption: false
        },
        createdAt: {
          label: '日期',
          mode: 'datetime',
          config: {
            format: (date) => String(moment(date).format('lll'))
          }
        },
        notes: {
          label: '备注'
        }
      }
    }

    const Form = t.form.Form
    return (
      <View style={{ margin: 10, flex: 1 }} >
        <Form
          ref="form"
          type={Person}
          options={options}
          value={{ type: 'payment', members: 'brj' }}
        />
      </View>
    )
  }
}

export default NewRecordScreen
