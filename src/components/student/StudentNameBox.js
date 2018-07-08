import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class StudentNameBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  componentDidMount() {
    const sd = this.props.studentData;
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
    const sd = this.props.studentData

    console.log("SNB render() checked in: " + sd.checkedIn);

    let checkedInDisplay = 'No'
    if (sd.checkedIn) {
      checkedInDisplay = 'Yes'
    }

    return (
      <View>
      <View style={{
        flex: 5,
        marginTop: '4em',
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
        Age: {sd.age}
        {"\n"}
        Assigned to bus: {sd.bus}
        {"\n"}
        Checked in: {checkedInDisplay}
      </Text>
      </View>
      </View>
    )
  }
}
