import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { markStudentAsCheckedIn } from './../util/utils'
import { getDayOfWeek } from './../util/utils'

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
          }}
          >
            <View style={{
              flexDirection: 'row',
            }}
            >
              <Button title="Back" onPress={this.release}/>
              <Text style={{
                fontSize: 30,
                paddingLeft: '5em',
              }}
              >{getDayOfWeek()}</Text>
            </View>
        </View>

        <View style={{
          marginTop: '1em',
        }}
        >
          <StudentNameBox studentData={this.props.studentData}/>
          <DropoffInfoBox studentData={this.props.studentData}/>

          {
            this.state.checkInRequestPending
              ? <MDSpinner />
              : null
          }
       </View>
     </View>
    )
  }
}
