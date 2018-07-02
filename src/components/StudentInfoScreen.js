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
      checkInComplete: false,
    }

    this.studentId = this.props.studentData.id

    this.release = this.release.bind(this)
    this.checkIn = this.checkIn.bind(this)
  }


  componentDidMount() {
    const sd = this.props.studentData;
    console.log("StudentInfoScreen DidMount() with data: " + JSON.stringify(sd));
    console.log("StudentInfoScreen screenLever: " + this.props.screenLever);
  }

  checkIn() {
    this.setState({ checkInRequestPending: true })
    markStudentAsCheckedIn(this.studentId)
      .then((response) => {
        this.setState({
          checkInRequestPending: false,
          checkInComplete: true,
        })
    })
  }

  release() {
    this.props.screenLever('StudentInfoScreen', null)
  }

  render() {

    console.log("checkInComplete: " + this.state.checkInComplete);

    return (
      <View style={{
          flex: 1,
          marginLeft: '1em',
          marginRight: '1em',
          alignItems: 'left',
        }}
      >
        <View style={{
            marginTop: '5em',
            marginLeft: '1em',
            marginRight: '16em',
            alignItems: 'left',
          }}
          >

          <Button title="Back" onPress={this.release}/>
        </View>
        <View>
        <StudentNameBox studentData={this.props.studentData}/>
        <DropOffInfoBox studentData={this.props.studentData}/>


          {
            this.state.checkInRequestPending
                  ? <MDSpinner />
                  : null
          }

        <View style={{
            marginLeft: '3em',
            marginRight: '3em',
            alignItems: 'left',
          }}
          >
          {
            this.state.checkInComplete
              ? <Text>Checked In!</Text>
              : <Button title="Check In" onPress={this.checkIn}/>
          }

       </View>
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
      checkedIn: sd.checkedIn,
      staffNotes: sd.staffNotes,
    })

  }

  render() {

    console.log("SNB render() checked in: " + this.state.checkedIn);
    let checkedInDisplay = 'No'
    if (this.props.studentData.checkedIn) {
      checkedInDisplay = 'Yes'
    }

    return (
      <View>
      <View style={{
        flex: 5,
        marginTop: '4em',
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
        {"\n"}
        Checked in: {checkedInDisplay}
      </Text>
      </View>
      </View>
    )
  }
}

class DropOffInfoBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
    }
  }

  componentDidMount() {
    const sd = this.props.studentData
    this.setState({
      name: sd.intendedDroppedOffByName,
    })
   }


  render() {

    console.log("this.state.name: " + this.state.name);

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
        Expecting drop off by:
        {"\n"}


        <Text style={{
          fontSize: 16,
        }}
        >
          {this.state.name}
        </Text>
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
