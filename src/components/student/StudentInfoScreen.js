import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { getDayOfWeek } from '../util/utils'
import { getStudentRecord } from '../util/utils'
import { sendClearDropoff } from '../util/utils'

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
    this.clearDropoff = this.clearDropoff.bind(this)
    this.getDropoffTimeForDay = this.getDropoffTimeForDay.bind(this)
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

  getDropoffTimeForDay(studentData) {
    let output = null
    switch ( getDayOfWeek() ) {
    case 'sun':
        output = studentData.sunDropoffTime;
        break;
    case 'mon':
        output = studentData.monDropoffTime
        break
    case 'tue':
        output = studentData.tueDropoffTime
        break
    case 'wed':
        output = studentData.wedDropoffTime
        break
    case 'thu':
        output = studentData.thuDropoffTime
        break
    case 'fri':
        output = studentData.friDropoffTime
        break
    case 'sat':
        output = studentData.satDropoffTime;
        break;
      default:
        output = null
    }
    return output
  }

  clearDropoff(studentData) {
    // TODO: fix this studentData.studentData silliness
    console.log("clearDropoff() with studentData: " + JSON.stringify(studentData))
    sendClearDropoff(studentData.studentData.id)
  }


  render() {

    const studentData = getStudentRecord(this.studentId)
    const dropoffTime = this.getDropoffTimeForDay(studentData)

    let checkedInDisplay = 'No'
    if (dropoffTime) {
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
            marginTop: '18em',
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
              marginTop: '4em',
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
              { checkedInDisplay ? (
                <View>
                  <Text>Check In time:{"\n"}{dropoffTime}</Text>
                  <View style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                    <Button title="Clear checkin" onPress={() => this.clearDropoff({ studentData })} />
                  </View>
                </View>
                ) : (
                  null
                )
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
