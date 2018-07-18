import React from 'react'
import { View, Button, Text, TextInput, ImageBackground, ScrollView } from 'react-native'
import { utils, RuuiProvider, Tooltip } from 'react-universal-ui'

import { getStudentDataStore } from './util/utils'
import StudentMatch from './MatchStudent'


export default class FindStudentScreen extends React.Component {
  constructor(props) {
    super(props)

    const stus = getStudentDataStore()

    this.state = {
      screenWidth: this.props.screenWidth,
      students: stus,
      studentMatch: null,
      searchFieldText: 'Filter by name',
    }

    this.findMatches = this.findMatches.bind(this)
  }


  findMatches(input) {
    const query = input.text
    if (query === '') {
      this.setState({ studentMatch: null })
    } else {
      let matches = []
      Object.entries(this.state.students).map((record) => {
        const data = record[1]
        const firstName = data.firstName
        const lastName = data.lastName
        const lc = query.toLowerCase()
        if (
          firstName.toLowerCase().startsWith(lc) ||
          lastName.toLowerCase().startsWith(lc)
        ) {
          matches.push(data)
        }
      })
      if (matches.length > 0) {
        console.log("findMatches found: " + matches);
        this.setState({ studentMatch: matches })
      }
    }
  }


  render() {
    //console.log("FindStudent render(), studentMatch: " + this.state.studentMatch)

    return (
      <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
          }}>


           <View style={{
              flex: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '12em',
            }}
            >

            <ScrollView>
              { this.state.studentMatch
                  ? <StudentMatch students={this.state.studentMatch} screenLever={this.props.screenLever}/>
                  : <StudentMatch students={this.state.students} screenLever={this.props.screenLever}/>
              }
            </ScrollView>
          </View>

          <View style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          >

            <TextInput
              style={{ textAlign: 'center', borderWidth: '1px', padding: '2em', margin: '2em' }}
              placeholder={this.state.searchFieldText}

              onChangeText={(text) => this.findMatches({ text })}
            />

            </View>


            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '2em',
            }}
            >


            {
              this.state.students
                ? <Text style={{ marginTop: '1em' }}>Students loaded: {Object.keys(this.state.students).length}</Text>
                : <Text style={{ marginTop: '1em' }}>Students loaded: 0</Text>
            }

          </View>
          <Button title="Reports" onPress={this.props.setReportsScreen}/>
      </View>
    )
  }
}
