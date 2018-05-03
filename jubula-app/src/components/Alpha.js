import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import StudentMatch from './MatchStudent'

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

        studentMatch: null,
        //studentMatch: ['Maria Jose'],
        searchFieldText: ''
      }

      this.findMatches = this.findMatches.bind(this)
      this.searchClicked = this.searchClicked.bind(this)
      this.studentSearch = this.studentSearch.bind(this)
  }

  findMatches(query) {
    if (query === '') {
      this.setState({ studentMatch: null })
    } else {
      let matches = []
      this.state.students.map((stu) => {
        if (stu.toLowerCase().startsWith(query.toLowerCase())) {
          matches.push(stu)
        }
      })
      console.log("findMatches: " + matches);
      if (matches.length > 0) {
        this.setState({ studentMatch: matches })
      }
    }
  }

  studentSearch(input) {
    console.log("PSS event value: " + input.text);
    this.findMatches(input.text)
    //this.setState({ searchPrefix: event.target.value })
  }

  searchClicked() {
    this.setState({ searchFieldText: 'foobar' })
    console.info("SC")
  }

    /*
  studentSearch(input) {
    console.log("studentSearch(): " + input.text);
  }
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

*
          style={styles.matchBox}

          */
      //return <View style={styles.alphaContainer}>
    return <View
      style={{
        backgroundColor:'#fffaaa',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width: 280,
        height: 610,
       }}
      >
      {
        this.state.studentMatch
          ? <StudentMatch matches={this.state.studentMatch}/>
          : null
      }

        <TextInput
          onChangeText={(text) => this.studentSearch({ text })}
          placeholder="Search for student"
        />

    </View>
  }
}
