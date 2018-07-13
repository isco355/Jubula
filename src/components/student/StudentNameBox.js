import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { getStudentRecord } from '../util/utils'


export default class StudentNameBox extends React.Component {
  componentDidMount() {
    const sd = getStudentRecord(this.props.studentId)
    console.log("StudentNameBox DidMount() with data: " + JSON.stringify(sd));
    this.setState({
      id: sd.id,
      name: `${sd.firstName} ${sd.lastName}`,
      age: sd.age,
      bus: sd.designatedBus,
      checkedIn: sd.checkedIn,
      staffNotes: sd.staffNotes,
    })

  }

  render() {
    const sd = getStudentRecord(this.props.studentId)

    console.log("SNB render() checked in: " + sd.checkedIn);

    let checkedInDisplay = 'No'
    if (sd.checkedIn) {
      checkedInDisplay = 'Yes'
    }

    return (
      <View>
        <View style={{
          flex: 5,
          marginTop: '6em',
          marginLeft: '2em',
          marginRight: '1em',
        }}
        >
          <Text style={{
            fontSize: 24,
          }}
          >
            Name: {sd.firstName} {sd.lastName}
            {"\n"}
            Checked in: {checkedInDisplay}
          </Text>
        </View>
      </View>
    )
  }
}
