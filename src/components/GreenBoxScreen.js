import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class GreenBoxScreen extends React.Component {
   constructor(props) {
      super(props)

     this.releaseScreen = this.releaseScreen.bind(this)
    }

  componentDidMount() {
    console.log("Green CDM()");
  }

  releaseScreen() {
    console.log("GBS releaseScreen()");
    this.props.screenLever('GreenBoxScreen')

  }

  render() {
    console.log("Green render()");

    return (
      <View style={{
            flex:1,
            alignItems:'center',
            backgroundColor: 'green',
      }}>
          <Text
            style={{ textAlign: 'center', borderWidth: '1px', padding: '2em', margin: '2em' }}
          >Green Screen</Text>

          <Button title="Lever" onPress={this.releaseScreen}/>
      </View>
    )
  }
}
