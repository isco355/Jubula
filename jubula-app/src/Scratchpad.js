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

class MatchRow extends React.Component {
  constructor(props) {
    super(props)
    this.checkIn = this.checkIn.bind(this)
  }

  checkIn(name) {
    console.log("CI " + name.text);
  }

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
      <View style={styles.matchBox}>
        <View style={styles.innerBox}>
          <Text>Bruce Juice</Text> 
        </View>
        <View style={styles.checkInButton}>
          <Button title="Check In" onPress={this.checkIn}/>
        </View>
      </View>
    )
  }
}

export default class Output extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      students: [
        //'Ball',
        //"D'Esterre Darby",
        //'Hallowell',
        //'Saumarez',
        'Westcott',
        'Wolfe',
      ],
      smatch: null,
    }
  }


    /*
    const matches = this.state.students.map((stu) => {
      //return <ul> {stu} </ul>
      return <MatchRow name={stu}/>
    })
    <Text> {matches} </Text>
    */
  render() {

    //<Text style={styles.welcome}> Scratchpad </Text>
    //<Image source={require('../assets/iphonex.png')} onLoad={this.onBackgroundLoad} />
    return <View style={styles.boxy}>
      {
        this.state.smatch
          ? <MatchRow matches={this.state.smatch}/>
          : null
      }

      <Button
        title="Search"
        wrapperStyle={styles.buttonIsh}
        onPress={this.searchClicked}
      />
    </View>
  }
}
