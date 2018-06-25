import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class StudentInfoScreen extends React.Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    console.log("SIS CDM()");
  }


  render() {

    return (
        <View>
          <Text>Foo Bar Baz</Text>
        </View>
    )

  }
}
