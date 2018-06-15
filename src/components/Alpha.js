import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import StudentMatch from './MatchStudent'


export default class Output extends React.Component {
  constructor(props) {
    super(props)

    this.cubaHost = 'http://alsi-parliament.herokuapp.com'
    this.studentListUrl = `${this.cubaHost}/studentList`
    //this.studentListUrl = 'http://localhost:9292/studentList'

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
    console.log("LSL() retrieving students from: " + this.studentListUrl);
    return fetch(this.studentListUrl, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("LSL() retrieved students: " + JSON.stringify(json))
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
        const key = pair[0]
        const data = pair[1]
        const firstName = data.firstName
        const lastName = data.lastName
        console.log("key: " + key);
        console.log("data:" + JSON.stringify(data));
        const lc = query.toLowerCase()
        if (
          firstName.toLowerCase().startsWith(lc) ||
          lastName.toLowerCase().startsWith(lc)
        ) {
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




          */
      //return <View style={styles.alphaContainer}>
    return <View style={{
        backgroundColor: '#CCFFCC',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width: 320,
        height: 650,
       }}
      >

        <View style={{
          minHeight: 500,
          minWidth: 320,
          borderWidth: '2',
        }}
        >

          {
            this.state.studentMatch
              ? <StudentMatch matches={this.state.studentMatch}/>
              : null
          }

        </View>


        <Button
          title="Load Student List"
          onPress={this.loadStudentList}
          style={{
            marginTop: '1em',
          }}
        />

        {
          this.state.students
            ? <Text style={{ marginTop: '1em' }}>Students loaded: {Object.keys(this.state.students).length}</Text>
            : <Text style={{ marginTop: '1em' }}>Students loaded: 0</Text>
        }


    </View>
  }
}
