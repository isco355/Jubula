import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import StudentMatch from './MatchStudent'


export default class FindScreen extends React.Component {
  constructor(props) {
    super(props)

    console.log("FindScreen props: " + JSON.stringify(props))

    this.state = {
      students: null,
      studentMatch: null,
      searchFieldText: '',
    }




    this.findMatches = this.findMatches.bind(this)
  }


  componentDidMount() {
    console.log("Find Screen CDM()");
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

    console.log("Find Screen render()");

    return (
      <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
          }}>

          <TextInput
            onChangeText={(text) => this.findMatches({ text })}
            style={{ textAlign: 'center', borderWidth: '2px', padding: '1em', margin: '2em' }}
            placeholder="Search for students"
          />

      </View>


    )

    /*


      //return <View style={styles.alphaContainer}>
    return <View style={{
          flex: 1,
          flexDirection:'column',
          alignItems:'center',
          justifyContent:'center',
         }}
        >

          <View style={{
            flex: 1,
            alignItems:'center',
          }}
          >

            <View style={{
              flex: 10,
              minWidth: this.width,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            >

              {
                this.state.studentMatch
                  ? <StudentMatch matches={this.state.studentMatch}/>
                  : null
              }

            </View>


            <View style={{
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              minWidth: this.width,
            }}
            >

              <TextInput
                style={{ textAlign: 'center', borderWidth: '1px', padding: '1em', margin: '2em' }}
                placeholder="Search for student"

                onChangeText={(text) => this.findMatches({ text })}
              />

            </View>


            <View style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: this.width,
            }}
            >

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
        </View>


      </ImageBackground>


  </View>
          */
}
}
