import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

const styles = StyleSheet.create({
  boxy: {
    height: 610,
    width: 282,
    backgroundColor: '#ff23',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  srow: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
  },
  text: {
    fontSize: 30
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  buttonWrapper: {
    backgroundColor: '#00bcd4',
    marginTop: 20,
  },
  buttonIcon: {
    fontSize: 28,
    color: '#ffffff',
  },
  buttonIsh: {
    margin: 50,
  },
  matchButton: {
    fontSize: 16,
    margin: 10,
  },
  innerBox: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  matchBox: {
    backgroundColor:'#fffaaa',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
  },
  checkInButton: {
    flex: 0.3,
    margin: 3,
  },
});

export default class Output extends React.Component {
  constructor(props) {
    super(props)
      this.onBgLoad = this.onBgLoad.bind(this)
    }


  onBgLoad() {
    console.log("OBG");
  }
    /*
    const matches = this.state.students.map((stu) => {
      //return <ul> {stu} </ul>
      return <MatchRow name={stu}/>
    })
    <Text> {matches} </Text>
    */
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

          */
    return (<View>
       <Image
          style={{width: 250, height: 500}}
          source={require('../assets/iphonex.png')}/>

        )
        </ImageBackground>

  }
}
