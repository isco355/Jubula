import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import StudentMatch from './MatchStudent'

export default class Output extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      students: null,
      studentMatch: null,
      searchFieldText: '',
    }

    this.loadStudentList = this.loadStudentList.bind(this)
    this.findMatches = this.findMatches.bind(this)
  }


  componentDidMount() {
    this.loadStudentList()
  }

  loadStudentList() {
    return fetch('http://localhost:9292/studentList', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("LSL fetch response: " + JSON.stringify(json))
        this.setState({ students: json })
      })
  }


  findMatches(input) {
    const query = input.text
    if (query === '') {
      this.setState({ studentMatch: null })
    } else {
      let matches = []
      console.log("this.state.students typeof: " + typeof this.state.students);
      console.log("this.state.students: " + JSON.stringify(this.state.students))
      Object.entries(this.state.students).map((pair) => {
        const name = pair[1]
        if (name.toLowerCase().startsWith(query.toLowerCase())) {
          matches.push(pair)
        }
      })
      console.log("findMatches: " + matches);
      if (matches.length > 0) {
        this.setState({ studentMatch: matches })
      }
    }
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
        onChangeText={(text) => this.findMatches({ text })}
        placeholder="Search for student"
      />

    {
      this.state.students
        ? <Text>Student count: {Object.keys(this.state.students).length}</Text>
        : <Text>Student count: 0</Text>
    }

      <Button title="Load Student List" onPress={this.loadStudentList} />

    </View>
  }
}
