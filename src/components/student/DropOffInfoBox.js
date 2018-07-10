import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { updateStudentDropoffInfo } from '../net/network'


export default class DropoffInfoBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sdata: this.props.studentData,
      name: this.props.studentData.droppedOffByName,
      editing: false,
    }


    this.editDropoff = this.editDropoff.bind(this)
  }

  componentDidMount() {
  }

  editDropoff() {
    this.setState({ editing: true })
  }


  render() {

    console.log("this.state.name: " + this.state.name);

    return (
      <View>
        <View style={{
          flex: 5,
          marginTop: '10em',
          marginLeft: '2em',
          marginRight: '1em',
        }}
      >
          <Text style={{
            fontSize: 24,
          }}
          >
            Expecting drop off by:
            {"\n"}

              { this.state.editing
                  ? <EditDropoffInfoBox data={this.state.sdata} />
                  : <DropoffInfoDisplay name={this.state.name} lever={this.editDropoff} />
              }

          </Text>
        </View>

        <View style={{
          flex: 1,
          marginTop: '15em',
          marginLeft: '2em',
          marginRight: '2em',
        }}
        >
        </View>
      </View>
    )
  }
}


class DropoffInfoDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row',
      }}>

        <Text style={{fontSize: 16}}> {this.props.name} </Text>
        <Button title="Change" onPress={this.props.lever} />
      </View>
    )
  }
}


class EditDropoffInfoBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      updated: '',
      sdata: this.props.data
    }
    this.sendDropoffUpdate = this.sendDropoffUpdate.bind(this)
  }

  sendDropoffUpdate() {
    const studentId = this.state.sdata.id
    const body = {
      'droppedOffByName': this.state.updated,
    }

    this.setState({ updating: true })
    updateStudentDropoffInfo(studentId, body)
    .then(() => {
      this.setState({ updating: false })
    })
  }


  render() {
    const sd = this.props.data
    console.log("EDOIFB props.name: " + sd.name);
    const updatedDropoffInfo = 'foo man chu'
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row'
      }}>
        <TextInput
          style={{ flex: 8, borderWidth: '1px' }}
          placeholder={sd.name}
          onChangeText={(text) => this.setState({ updated: text })}
        />

      <Button
        title="Update" onPress={this.sendDropoffUpdate} />
      </View>
    )
  }


}
