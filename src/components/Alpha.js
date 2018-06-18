import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import StudentMatch from './MatchStudent'


export default class Output extends React.Component {
  constructor(props) {
    super(props)

    this.scale = 2
    this.baseWidth = 750
    this.baseHeight = 1334
    this.width = this.baseWidth / this.scale
    this.height = this.baseHeight / this.scale

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
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
       }}
      >

        <View style={{
          minWidth: this.width,
          minHeight: this.height,
          borderWidth: '1',
        }}
        >

          <View style={{
            flex: 1,
            alignItems:'center',
          }}
          >



            <View style={{
              flex: 10,
              borderWidth: '1',
              minWidth: this.width,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >
              <Text>Area 1</Text>
            </View>

            <View style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: '1',
              flexDirection: 'row',
              minWidth: this.width,
            }}
            >
              <Text
                style={{
                }}
              >
                Text Area 2
              </Text>
            </View>

            <View style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: '1',
              flexDirection: 'row',
              minWidth: this.width,
            }}
            >
             <Text style={{
              borderWidth: '2',
            }}
            >
              Text Area 3
            </Text>
          </View>



          </View>
        </View>
    </View>
  }
}
