import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { sendDropoffUpdate } from '../util/utils'


export default class DropoffInfoBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sdata: this.props.studentData,
      editing: true,
      showConfirmation: false,
    }

    this.setEditing = this.setEditing.bind(this)
  }

  componentDidMount() {
  }

  setEditing(bool) {
    this.setState({ editing: bool })
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
          Student dropped off by:
          {"\n"}

            { this.state.editing ? (
              <EditDropoffInfoBox
                data={this.state.sdata}
                lever={() => this.setEditing(false)}
              />
            ) : (
              <DropoffInfoDisplay name={this.state.name} lever={() => this.setEditing(true)} />
              )
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
      droppedOffByName: '',
      sdata: this.props.data,
      confirmBox: false,
    }
    this.updateDropoffName = this.updateDropoffName.bind(this)
    this.setConfirmation = this.setConfirmation.bind(this)
    this.sendDropoffUpdate = this.sendDropoffUpdate.bind(this)
  }

  updateDropoffName(event) {
    this.setState({ droppedOffByName: event.text })
  }

  setConfirmation(bool) {
    console.log("setConfirmation(): " + bool);
    if (bool) {
      this.setState({ confirmBox: true })
    } else {
      this.setState({ confirmBox: false })
    }
  }

  markDroppedOff() {
    const studentId = this.state.sdata.id
    const body = {
      droppedOffByName: this.state.droppedOffByName,
    }

    this.setState({ updating: true })
    updateStudentDropoffInfo(studentId, body)
    .then(() => {
      this.setState({ updating: false })
      this.props.lever()
    })
  }


  render() {
    const sd = this.props.data
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
      }}>
        <TextInput
          style={{
            flex: 6,
            borderWidth: '1px',
            fontSize: 24,
          }}

          placeholder={this.state.droppedoffBy}
          onChangeText={(text) => this.updateDropoffName({ text })}
        />

      { this.state.confirmBox ? (
          <View>
            <Text>
              Check in with
              {"\n"}
              {this.state.droppedOffByName} ?
            </Text>
            <View style={{
              flexDirection: 'row',
            }}
            >
              <Button
                title="Back"
                onPress={() => this.setConfirmation(false)}
              />
              <Button
                title="Check In"
                onPress={this.sendDropoffUpdate}
              />
            </View>
          </View>
        ) : (
          <Button
            title="Check In"
            onPress={() => this.setConfirmation(true)}
          />
        )
      }
      </View>
    )
  }
}
