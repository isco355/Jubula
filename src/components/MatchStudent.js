import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native';


export default class StudentMatch extends React.Component {
  render() {
    //console.log("StudentMatch render(), matches prop: " + this.props.matches)
    //console.log("matches type: " + typeof this.props.matches);
    //console.log("matches data: " + JSON.stringify(this.props.matches))
    console.log("StudentMatch students length: " + this.props.students.length)
    //console.log("StudentMatch screenLever: " + this.props.screenLever)

    return (
      <div>
        {
          this.props.students.map((student) => {
            return <MatchButton
              key={student.id}
              id={student.id}
              firstName={student.firstName}
              lastName={student.lastName}
              screenLever={this.props.screenLever}
            />
          })
        }
      </div>
    );
  }
}


class MatchButton extends React.Component {

  constructor(props) {
    super(props)
    this.firstName = this.props.firstName
    this.lastName = this.props.lastName
    this.studentId = this.props.id

    this.release = this.release.bind(this)
  }


  release() {
    console.log("MatchStudent release() studentId: " + this.studentId);
    this.props.screenLever('StudentMatch', this.studentId)
  }


  render() {
    //console.log("MatchButton render() with names: " + this.firstName + ", " + this.lastName)
    return (
      <View style={{
        borderColor: '#ee0000',
        backgroundColor:'#778899',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      }}>

        <View style={{
          flex: 1,
          alignItems:'center',
          justifyContent:'center',
          margin: 3,
        }}>
          <Text style={{
              color: '#FFFFFF',
              fontSize: '20px',
            }}>
            {this.firstName} {this.lastName}
          </Text>
        </View>

        <View style={{
          flex: 1,
          margin: 3,
        }}>
          <Button title="Go" onPress={this.release}/>
        </View>
      </View>
    )
  }
}
