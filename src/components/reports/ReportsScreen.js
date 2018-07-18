import React from 'react'
import { View, Text, TextInput, ImageBackground, ScrollView } from 'react-native'
import { utils, RuuiProvider, Tooltip } from 'react-universal-ui'

import { getStudentDataStore } from '../util/utils'


export default class ReportsScreen extends React.Component {
  constructor(props) {
    super(props)
    this.students = getStudentDataStore()
  }


  render() {
    console.log("students: " + JSON.stringify(this.students))
    return (
      <View>
        {
          this.students.map(record => {
            return <ReportRow data={record} />
          })
        }
      </View>
    )
  }
}


class ReportRow extends React.Component {
  render() {
    console.log("RR: " + JSON.stringify(this.props.data))
    const fn = this.props.data.firstName
    const ln = this.props.data.lastName

    let interesting = {}
    Object.keys(this.props.data).map(key => {
      const val = this.props.data[key]
      if ( val !== null ) {
        if ( key !== fn || key !== ln ) {
          interesting[key] = val
        }
      }
    })

    console.log("interesting: " + interesting)

    return (
      <View>
        <Text>{fn} {ln}</Text>
        {
          Object.keys(interesting).map(key => {
            const val = interesting[key]
            return <Text>{key}: {val}</Text>
          })
        }
      </View>
    )
  }
}
