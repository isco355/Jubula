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
      editing: true,
      showConfirmation: false,
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
            Student dropped off by:
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
      checkedInBy: '',
      sdata: this.props.data,
      confirmBox: false,
    }
    this.updateCheckedInName = this.updateCheckedInName.bind(this)
    this.setConfirmation = this.setConfirmation.bind(this)
    this.sendDropoffUpdate = this.sendDropoffUpdate.bind(this)
  }

  updateCheckedInName(event) {
    this.setState({ checkedInBy: event.text })
  }

  setConfirmation(bool) {
    console.log("setConfirmation(): " + bool);
    if (bool) {
      this.setState({ confirmBox: true })
    } else {
      this.setState({ confirmBox: false })
    }
  }

  sendDropoffUpdate() {
    const studentId = this.state.sdata.id
    const body = {
      droppedOffByName: this.state.checkedInName,
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

          placeholder={this.state.checkedInBy}
          onChangeText={(text) => this.updateCheckedInName({ text })}
        />

      { this.state.confirmBox ? (
          <View>
            <Text>
              Check in with:
              {"\n"}
              {this.state.checkedInBy} ?
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
                onPress={this.sendCheckInUpdate}
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
