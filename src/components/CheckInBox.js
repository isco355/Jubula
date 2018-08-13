import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

/*
const styles = StyleSheet.create({
  buttonIsh: {
    margin: 50,
  },
  matchButton: {
    fontSize: 16,
    margin: 10,
  },
  innerBox: {
  },
  matchBox: {
  },
  checkInButton: {
  },
});
*/

class CheckInBox extends React.Component {
  constructor(props) {
    super(props)
    this.checkIn = this.checkIn.bind(this)
  }

  checkIn(name) {
    console.log("CI " + name.text);
  }

  export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70,
  }
});

    /*
  render() {
    const name = this.props.name
    return (
      <View style={styles.matchrow}>
        <Text style={styles.srow}>{ name }</Text>
        <Button title="Check in" onPress={this.checkIn({ name })} wrapperStyle={styles.matchButton}/>
      </View>
    )
  }

        style={{
          flexDirection: 'row',
          height: 100,
          borderWidth: 1,

        <View style={{flexDirection:'row', flex: 0.7, justifyContent:'center', alignItems:'center', borderWidth: 2}} >

  */
  render() {
    return (
      <View style={{
        backgroundColor:'#fffaaa',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
      }}>
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
        }}>
          <Text>Bruce Juice</Text>
        </View>
        <View style={{
          flex: 0.3,
          margin: 3,
        }}>
          <Button title="Check In" onPress={this.checkIn}/>
        </View>
      </View>
    )
  }
}
