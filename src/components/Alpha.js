import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { loadStudentList } from './util/utils'
import { getStudentDataStore } from './util/utils'
import FindStudentScreen from './FindStudentScreen'
import StudentInfoScreen from './student/StudentInfoScreen'
import ReportScreen from './reports/ReportsScreen'


export default class Output extends React.Component {
  constructor(props) {
    super(props)

    this.resolutions = {
      iphonex: [ 2436, 1125 ],
      iphone6: [ 1334, 750 ],
    }

    this.state = {
      activeStudentId: null
    }

    this.scale = 3
    this.selectedPhone = 'iphonex'
    this.baseHeight = this.resolutions[this.selectedPhone][0]
    this.baseWidth = this.resolutions[this.selectedPhone][1]
    this.width = this.baseWidth / this.scale
    this.height = this.baseHeight / this.scale

    //this.activeScreen = 'FindStudentScreen'
    //this.activeScreen = 'StudentInfoScreen'

    this.setReportsScreen = this.setReportsScreen.bind(this)
    this.refreshStudents = this.refreshStudents.bind(this)
    this.screenLever = this.screenLever.bind(this)
  }


  componentDidMount() {
    this.refreshStudents()
  }


  refreshStudents() {
    loadStudentList()
      .then(() => {
        this.activeScreen = 'FindStudentScreen'
        //this.activeScreen = 'Reports'
        this.forceUpdate()
    })
  }


  screenLever(screenReleasingHold, supportingData) {
    console.log("Alpha screenLever() from " + screenReleasingHold + " with supportingData: " + JSON.stringify(supportingData));

    if (screenReleasingHold === 'StudentMatch') {
      const studentId = supportingData
      this.activeScreen = 'StudentInfoScreen'
      this.setState({ activeStudentId: studentId })
    }
    if (screenReleasingHold === 'StudentInfoScreen') {
      this.setState({ activeStudentId: null })
      this.refreshStudents()
    }
    if (screenReleasingHold === 'Reports') {
      this.activeScreen = 'FindStudentsScreen'
      this.refreshStudents()
    }
  }

  setReportsScreen() {
    this.activeScreen = 'Reports'
    this.forceUpdate()
  }


  render() {
    return (

      <View style={{ flex: 1 }}>

      { this.activeScreen === 'Reports' ? (
          <ReportScreen release={this.screenLever} />

        ) : (
          <ImageBackground style={{ width: this.width, height: this.height }}
            source={require('./assets/iphonex.png')}
          >

              { this.activeScreen === 'FindStudentScreen' &&
                  <FindStudentScreen
                    screenLever={this.screenLever}
                    screenWidth={this.width}
                    setReportsScreen={this.setReportsScreen}
                  />
              }


              { this.activeScreen === 'StudentInfoScreen' &&
                  <StudentInfoScreen
                    screenLever={this.screenLever}
                    studentId={this.state.activeStudentId}
                />
              }


          </ImageBackground>
        )
      }

      </View>
    )
  }
}
