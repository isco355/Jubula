import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { getStudentRecord } from '../util/utils'
import { sendDropoffUpdate } from '../util/utils'


export default class DropoffInfoBox extends React.Component {
  constructor(props) {
    super(props)

    this.studentId = this.props.studentId

    this.state = {
      studentData: getStudentRecord(this.studentId),
      editing: true,
      showConfirmation: false,
    }

    this.setEditing = this.setEditing.bind(this)
    this.finishedEditing = this.finishedEditing.bind(this)
  }

  setEditing(bool) {
    this.setState({ editing: bool })
  }

  finishedEditing() {
    this.setEditing(false)
    this.props.lever()
  }


  render() {

    const droppedOffByName = this.state.studentData.droppedOffByName
    console.log("dobn:" + JSON.stringify(this.state.studentData))
    console.log("dobn:" + droppedOffByName)
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
          { this.state.studentData.droppedOffByName }
          {"\n"}

            { this.state.editing ? (
              <EditDropoffInfoBox
                studentId={this.studentId}
                exit={this.finishedEditing}
              />
            ) : (
              <DropoffInfoDisplay name={this.state.name} finished={() => this.setEditing(true)} />
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
        <Button title="Change" onPress={this.props.finished} />
      </View>
    )
  }
}


class EditDropoffInfoBox extends React.Component {
  constructor(props) {
    super(props)

    this.studentId = this.props.studentId

    this.state = {
      droppedOffByName: '',
      confirmBox: false,
    }
    this.updateDropoffName = this.updateDropoffName.bind(this)
    this.setConfirmation = this.setConfirmation.bind(this)
    this.checkIn = this.checkIn.bind(this)
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

  checkIn() {
    const body = {
      droppedOffByName: this.state.droppedOffByName,
    }

    this.setState({ updating: true })
    sendDropoffUpdate(this.studentId, body)
    .then(() => {
      this.setState({ updating: false })
      this.props.exit()
    })
  }


  render() {

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
                onPress={this.checkIn}
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
