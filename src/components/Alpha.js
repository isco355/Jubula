import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import FindStudentScreen from './FindStudentScreen'
import StudentInfoScreen from './StudentInfoScreen'


export default class Output extends React.Component {
  constructor(props) {
    super(props)


    //this.cubaHost = 'alsi-parliament.herokuapp.com'
    this.cubaHost = 'localhost:9292'
    this.studentListUrl = `http://${this.cubaHost}/studentList`

    this.resolutions = {
      iphonex: [ 2436, 1125 ],
      iphone6: [ 1334, 750 ],
    }

    this.scale = 3
    this.selectedPhone = 'iphonex'
    this.baseHeight = this.resolutions[this.selectedPhone][0]
    this.baseWidth = this.resolutions[this.selectedPhone][1]
    this.width = this.baseWidth / this.scale
    this.height = this.baseHeight / this.scale

    this.state = {
      studentsLoaded: null,
      activeStudent: null,
    }

    this.loadStudentList = this.loadStudentList.bind(this)
    this.screenLever = this.screenLever.bind(this)
  }


  componentDidMount() {
    this.loadStudentList()
  }


  screenLever(screenReleasingHold, supportingData) {
    console.log("Alpha screenLever() from " + screenReleasingHold + " with supportingData: " + JSON.stringify(supportingData));
    if (screenReleasingHold === 'StudentMatch') {
      const studentData = this.state.studentsLoaded.filter((record) => {
        return record.id === supportingData.studentParliamentId
      })
      console.log("Alpha SL studentData: " + JSON.stringify(studentData));
      this.activeScreen = 'StudentInfoScreen'
      this.setState({ activeStudentData: studentData })
    }
  }


  loadStudentList() {
    console.log("LSL() retrieving students from: " + this.studentListUrl);
    return fetch(this.studentListUrl, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("LSL() retrieved students: " + JSON.stringify(json))
        this.activeScreen = 'FindScreen'
        this.setState({ studentsLoaded: json })
      })
  }


  render() {

    console.log("alpha render(), activeScreen is: " + this.activeScreen);

    /*
    return <View style={{h
    flex: 1,
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
         }}
      >
    */

    return (

        <ImageBackground style={{ width: this.width, height: this.height }}
          source={require('./assets/iphonex.png')}
        >


            { this.activeScreen === 'FindScreen' &&
                <FindStudentScreen
                  screenLever={this.screenLever}
                  studentsLoaded={this.state.studentsLoaded}
                  screenWidth={this.width}
                />
            }


            { this.activeScreen === 'StudentInfoScreen' &&
                <StudentInfoScreen
                  screenLever={this.screenLever}
                  studentData={this.state.activeStudentData}
              />
            }


        </ImageBackground>

    )


}
}
