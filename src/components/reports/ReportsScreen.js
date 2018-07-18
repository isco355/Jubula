import React from 'react'
import { View, Text, Button, TextInput, ImageBackground, ScrollView } from 'react-native'
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
      <View style={{ flex: 1 }}>
        <Button title="Back" onPress={() => this.props.release('Reports')} />
        <ScrollView>
          {
            this.students.map(record => {
              return (
                <ReportRow data={record} key={record.id}/>
              )
            })
          }
        </ScrollView>
    </View>
    )
  }
}


class ReportRow extends React.Component {
  render() {
    //console.log("RR: " + JSON.stringify(this.props.data))
    const fn = this.props.data.firstName
    const ln = this.props.data.lastName

    let interesting = {}
    Object.keys(this.props.data).map(key => {
      const val = this.props.data[key]
      if ( val !== null ) {
        if ( key !== 'id' ) {
          if ( ! [ 'firstName', 'lastName' ].includes(key)) {
            interesting[key] = val
          }
        }
      }
    })

    return (
      <View style={{
        minWidth: '40em',
      }}>
        <Text>{fn} {ln}</Text>
        {
          Object.keys(interesting).map(key => {
            const val = interesting[key]
            return <Text key={key}>{key}: {val}</Text>
          })
        }
        <Text>{"\n"}</Text>
      </View>
    )
  }
}
