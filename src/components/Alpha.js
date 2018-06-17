import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import StudentMatch from './MatchStudent'


export default class Output extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }

  }

  componentDidMount() {
  }


  render() {

    /*
    <Text style={styles.welcome}> Scratchpad </Text>
    <Image source={require('../assets/iphonex.png')} onLoad={this.onBackgroundLoad} />
    <Image onLoad={this.onBgLoad} />
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
             <Image
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: 250, height: 500
          source={require('../assets/sonic.png')}
          onLoad={this.onBgLoad} />
          }}

*
          style={styles.matchBox}


        <View style={{
            flex: 15,
            justifyContent:'flex-start',
            borderWidth: '3px',
          }}>

        </View>

        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
          }}>

          <TextInput
            onChangeText={(text) => this.findMatches({ text })}
            style={{ textAlign: 'center', borderWidth: '2px', padding: '1em', margin: '2em' }}
            placeholder="Search for student"
          />

      </View>


          minHeight: 500,
          minWidth: 320,


          */
      //return <View style={styles.alphaContainer}>
    return <View style={{
        flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width: 320,
        height: 650,
       }}
      >

        <View style={{
          flex: 0.5,
          borderWidth: '2',
        }}
        >

        </View>
    </View>
  }
}
