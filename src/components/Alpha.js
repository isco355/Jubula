import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { loadStudentList } from './net/network'
import FindStudentScreen from './FindStudentScreen'
import StudentInfoScreen from './StudentInfoScreen'


export default class Output extends React.Component {
  constructor(props) {
    super(props)

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

    //this.activeScreen = 'Alpha'
    //this.activeScreen = 'FindStudentScreen'
    this.activeScreen = 'StudentInfoScreen'

    this.sdata = {"id":1,"firstName":"Helen","lastName":"Folasade","age":16,"checkedIn":false,"designatedBus":"Richmond","staffNotes":null,"intendedDroppedOffByName":"Michael Jeffrey Jordan","intendedDroppedOffByPhone":"704-555-1212","intendedDroppedOffByEmail":"thegoat@nba.com","actualDroppedOffByName":null,"actualDroppedOffByPhone":null,"actualDroppedOffByEmail":null}

    this.state = {
      studentsLoaded: null,
      activeStudentData: this.sdata,
      //activeStudentData: null,
    }

    this.screenLever = this.screenLever.bind(this)
  }


  componentDidMount() {
    loadStudentList()
      .then((json) => {
        //this.activeScreen = 'FindStudentScreen'
        this.setState({ studentsLoaded: json })
    })
  }


  screenLever(screenReleasingHold, supportingData) {
    //console.log("Alpha screenLever() from " + screenReleasingHold + " with supportingData: " + JSON.stringify(supportingData));
    if (screenReleasingHold === 'StudentMatch') {
      const studentDataArr = this.state.studentsLoaded.filter((record) => {
        return record.id === supportingData.studentParliamentId
      })
      const studentData = studentDataArr[0]
      this.activeScreen = 'StudentInfoScreen'
      console.log("screenLever: " + JSON.stringify(studentData));
      this.setState({ activeStudentData: studentData })
    }
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

            { this.activeScreen === 'FindStudentScreen' &&
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
