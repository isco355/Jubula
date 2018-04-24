import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import StudentMatch from './MatchStudent'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default class Output extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      students: [
        'Ball',
        "D'Esterre Darby",
        'Hallowell',
        'Saumarez',
        'Westcott',
        'Wolfe',
      ],

      smatch: null,
      searchFieldText: ''
    }

    this.findMatches = this.findMatches.bind(this)
    this.prefillStudentSearch = this.prefillStudentSearch.bind(this)
    this.searchClicked = this.searchClicked.bind(this)
    this.onBackgroundLoad = this.onBackgroundLoad.bind(this)
  }

  componentDidMount() {
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

 
  onBackgroundLoad() {
    console.info("OBL")
  }

  render() {
    const studentHtml = this.state.students.map((stu) =>
      <ul>{stu}</ul>
    )
      //<Text> {studentHtml} </Text>
    return <View style={styles.container}>
      <Image source={require('../assets/iphonex.png')} onLoad={this.onBackgroundLoad} />

      {
        this.state.smatch
          ? <StudentMatch matches={this.state.smatch}/>
          : null
      }

      <TextInput placeholder="Search for a student" onChangeText={(text) => this.prefillStudentSearch({ text })}  />

      <Button
        title="Search"
        wrapperStyle={{ marginTop: 10 }}
        onPress={this.searchClicked}
      />

  </View>
  }
}
