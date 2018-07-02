import React from 'react'
import MDSpinner from "react-md-spinner";

import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'

import { markStudentAsCheckedIn } from './net/network'

export default class StudentInfoScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkInRequestPending: false,
    }

    this.studentId = this.props.studentData.id

    this.checkIn = this.checkIn.bind(this)
  }


  componentDidMount() {
    const sd = this.props.studentData;
    console.log("StudentInfoScreen DidMount() with data: " + JSON.stringify(sd));
  }

    /*
        flex: 1,
        marginTop: '10em',
        marginLeft: '2em',
        marginRight: '1em',
        //alignItems: 'center'

      }}
        >
       { arr.map((kv) => {
         return (
           <Text style={{
             fontSize: 16,
           }}
         >{kv[0]} {kv[1]}</Text>
         );
      })}
      */

  checkIn() {
    this.setState({ checkInRequestPending: true })
    markStudentAsCheckedIn(this.studentId)
      .then((response) => {
      this.setState({ checkInRequestPending: false })
    })
  }

  render() {

    return (
      <View style={{
        }}
      >
        <StudentNameBox studentData={this.props.studentData}/>

        <View style={{
          alignItems: 'center'
        }}
        >

          {
            this.state.checkInRequestPending
                  ? <MDSpinner />
                  : null
          }

        </View>

        <View style={{
          flex: 2,
          marginTop: '15em',
          marginLeft: '2em',
          marginRight: '2em',
          }}
          >
          <Button title="Check In" onPress={this.checkIn}/>
       </View>
     </View>
    )
  }
}




class StudentNameBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }


  componentDidMount() {
    const sd = this.props.studentData;
    console.log("StudentNameBox DidMount() with data: " + JSON.stringify(sd));
    this.setState({
      id: sd.id,
      name: `${sd.firstName} ${sd.lastName}`,
      age: sd.age,
      bus: sd.designatedBus,
      staffNotes: sd.staffNotes
    })

  }

  render() {

    return (
      <View>
      <View style={{
        flex: 5,
        marginTop: '10em',
        marginLeft: '2em',
        marginRight: '1em',
        //alignItems: 'center'
      }}
    >
      <Text style={{
        fontSize: 24,
      }}
      >
        Name: {this.state.name}
        {"\n"}
        Age: {this.state.age}
        {"\n"}
        Assigned to bus: {this.state.bus}
      </Text>
      </View>
      <View style={{
        flex: 1,
        marginTop: '15em',
        marginLeft: '2em',
        marginRight: '2em',
      }}
      >
      </View>
      </View>
    )
  }
}
