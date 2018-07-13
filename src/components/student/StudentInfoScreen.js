import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { getDayOfWeek } from '../util/utils'
import { getStudentRecord } from '../util/utils'

import DropoffInfoBox from './DropoffInfoBox'


export default class StudentInfoScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkInRequestPending: false,
      checkInComplete: false,
    }

    this.studentId = this.props.studentId

    this.release = this.release.bind(this)
    this.refresh = this.refresh.bind(this)
  }


  componentDidMount() {
    const sd = getStudentRecord(this.studentId)
    console.log("StudentInfoScreen DidMount() with data: " + JSON.stringify(sd));
    //console.log("StudentInfoScreen screenLever: " + this.props.screenLever);
  }

  refresh() {
    this.forceUpdate()
  }

  release() {
    this.props.screenLever('StudentInfoScreen', null)
  }

  render() {

    const studentData = getStudentRecord(this.studentId)

    let checkedInDisplay = 'No'
    if (studentData.checkedIn) {
      checkedInDisplay = 'Yes'
    }
    //console.log("checkInComplete: " + this.state.checkInComplete);

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
                Name: {studentData.firstName} {studentData.lastName}
                {"\n"}
                Checked in: {checkedInDisplay}
              </Text>
              { checkedInDisplay === 'Yes'
                  ? <Text>Check In time:{"\n"}{studentData.checkInTime}</Text>
                  : null
              }
            </View>
          </View>


          <DropoffInfoBox
            studentId={this.studentId}
            lever={this.refresh}
          />

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
