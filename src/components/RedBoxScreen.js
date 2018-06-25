import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class RedBoxScreen extends React.Component {
  componentDidMount() {
    console.log("Red CDM()");
  }

  render() {
    console.log("Red render()");

    return (
      <View style={{
            flex:1,
            alignItems:'center',
            backgroundColor: 'red',
          }}>
              <Text
                style={{ textAlign: 'center', borderWidth: '1px', padding: '2em', margin: '2em' }}
              >Red Screen</Text>

      </View>
    )
  }
}
