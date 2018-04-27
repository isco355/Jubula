import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import StudentMatch from './MatchStudent'

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
  alphaContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchField: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    fontSize: 30,
    padding: 40,
  },
});

export default class Output extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        students: [
          'Ball',
          "D'Esterre Darby",
          'Hallowell',
          'Maria Jose',
          'Saumarez',
          'Westcott',
          'Wolfe',
        ],

        //smatch: null,
        smatch: ['Maria Jose'],
        searchFieldText: ''
      }

      this.findMatches = this.findMatches.bind(this)
      this.prefillStudentSearch = this.prefillStudentSearch.bind(this)
      this.searchClicked = this.searchClicked.bind(this)
      this.studentSearch = this.studentSearch.bind(this)
  }

  findMatches(query) {
    let matches = []
    this.state.students.map((stu) => {
      if (stu.startsWith(query)) {
        matches.push(stu)
      }
    })
    console.log("findMatches: " + matches);
    if (matches.length > 0) {
      this.setState({ smatch: matches })
    }
  }

  prefillStudentSearch(input) {
    console.log("PSS event value: " + input.text);
    this.findMatches(input.text)
    //this.setState({ searchPrefix: event.target.value })
  }
 
  searchClicked() {
    this.setState({ searchFieldText: 'foobar' })
    console.info("SC")
  }




    
 


    studentSearch(input) {
      console.log("studentSearch(): " + input.text);
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

     {
          this.state.smatch
            ? <StudentMatch matches={this.state.smatch}/>
            : null
        }*

          */
      //return <View style={styles.alphaContainer}>
      return <View>
       <ImageBackground
         style={{
            width: 375,
            height: 750,
            justifyContent: 'center',
            zIndex: -1,
         }}
         source={require('../../assets/iphonex.png')} 
        >

        <TextInput 
          onChangeText={(text) => this.studentSearch({ text })}
          placeholder="Search for student"
          style={styles.searchField}
        />
      </ImageBackground>
 
    </View>
  }
}
