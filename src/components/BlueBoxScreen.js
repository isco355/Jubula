import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class BlueBoxScreen extends React.Component {
  componentDidMount() {
    console.log("Blue CDM()");
  }

  render() {
    console.log("Blue render()");

    return (
      <View style={{
            flex:1,
            alignItems:'center',
            backgroundColor: 'powderblue',
          }}>
              <Text
                style={{ textAlign: 'center', borderWidth: '1px', padding: '2em', margin: '2em' }}
              >Blue Screen</Text>

      </View>
    )
  }
}
