import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

//import { RedBoxScreen, GreenBoxScreen, BlueBoxScreen } from './ColorBoxScreens.js'
import RedBoxScreen from './RedBoxScreen.js'
import GreenBoxScreen from './GreenBoxScreen.js'
import BlueBoxScreen from './BlueBoxScreen.js'


export default class Output extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
  }


  screenLever(screenReleasingHold, supportingData) {
    /*
    console.log("screenLever()");
    if (screenReleasingHold === 'FindScreen') {
      this.activeScreen = 'StudentInfoScreen'
    }
    */
  }


  render() {

    //console.log("alpha render(), activeScreen is: " + this.activeScreen);

    /*

            { this.activeScreen === 'FindScreen' &&
                <FindScreen
                  screenLever={this.screenLever}
                  studentsLoaded={this.state.studentsLoaded}
                  screenWidth={this.width}
                />
            }


            { this.activeScreen === 'StudentInfoScreen' &&
                <StudentInfoScreen />
            }

*/

    return (

        <ImageBackground style={{ width: this.width, height: this.height }}
          source={require('./assets/iphonex.png')}
        >


        <RedBoxScreen />



        </ImageBackground>

    )


}
}
