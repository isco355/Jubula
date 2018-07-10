import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { markStudentAsCheckedIn } from './../net/network'

import StudentNameBox from './StudentNameBox'
import DropoffInfoBox from './DropoffInfoBox'


export default class StudentInfoScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkInRequestPending: false,
      checkInComplete: false,
    }

    this.studentId = this.props.studentData.id

    this.release = this.release.bind(this)
    this.checkIn = this.checkIn.bind(this)
  }


  componentDidMount() {
    const sd = this.props.studentData;
    console.log("StudentInfoScreen DidMount() with data: " + JSON.stringify(sd));
    //console.log("StudentInfoScreen screenLever: " + this.props.screenLever);
  }

  checkIn() {
    this.setState({ checkInRequestPending: true })
    markStudentAsCheckedIn(this.studentId)
      .then((response) => {
        this.setState({
          checkInRequestPending: false,
          checkInComplete: true,
        })
    })
  }

  release() {
    this.props.screenLever('StudentInfoScreen', null)
  }

  render() {

    console.log("checkInComplete: " + this.state.checkInComplete);

    return (
      <View style={{
          flex: 1,
          marginLeft: '1em',
          marginRight: '1em',
          alignItems: 'flex-start',
        }}
      >

        <View style={{
            marginTop: '5em',
            marginLeft: '1em',
            marginRight: '16em',
            alignContent: 'flex-start',
            alignItems: 'flex-start',
          }}
          >

          <Button title="Back" onPress={this.release}/>
        </View>

        <View>

        <StudentNameBox studentData={this.props.studentData}/>
        <DropoffInfoBox studentData={this.props.studentData}/>

          {
            this.state.checkInRequestPending
                  ? <MDSpinner />
                  : null
          }

        <View style={{
            marginLeft: '3em',
            marginRight: '3em',
            alignItems: 'flex-start',
          }}
          >
          {
            this.props.studentData.checkedIn
              ? <Text>Checked In!</Text>
              : <Button title="Check In" onPress={this.checkIn}/>
          }

       </View>
       </View>
     </View>
    )
  }
}
