import React from 'react'
import { View, Text, StyleSheet, TextInput,ScollView,ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import FindScreen from './FindScreen'
import Box from './Box'

export default class Output extends React.Component {
  constructor(props) {
    super(props)

    this.activeScreen = 'FindScreen'

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
       students: ['joe','maria','pablo'],
      studentMatch: null,
      searchFieldText: '',
    }

    this.loadStudentList = this.loadStudentList.bind(this)
  }


  componentDidMount() {
    //this.loadStudentList()
  }


  loadStudentList() {
    console.log("LSL() retrieving students from: " + this.studentListUrl);
    return fetch(this.studentListUrl, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("LSL() retrieved students: " + JSON.stringify(json))
        this.setState({ students: json })
      })
  }


  render() {
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
                <FindScreen />

            }
        </ImageBackground>



    )


}
}
