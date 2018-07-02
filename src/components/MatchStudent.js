import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native';


export default class StudentMatch extends React.Component {

  render() {
    //console.log("StudentMatch render(), matches prop: " + this.props.matches)
    //console.log("matches type: " + typeof this.props.matches);
    //console.log("matches data: " + JSON.stringify(this.props.matches))
    console.log("StudentMatch matches length: " + this.props.matches.length)
    console.log("StudentMatch screenLever: " + this.props.screenLever)

    return (
      <div>
        {
          this.props.matches.map((pair) => {
            const data = pair[1]
            console.log("StudentMatch pair: " + JSON.stringify(pair[1]));
            return <MatchButton
              id={data.id}
              firstName={data.firstName}
              lastName={data.lastName}
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
    this.studentParliamentId = this.props.id

    this.release = this.release.bind(this)
  }


  release() {
    const studentData = {
      studentParliamentId: this.studentParliamentId,
    }
    console.log("MatchStudent release() studentData: ");
    this.props.screenLever('StudentMatch', studentData)
  }


  render() {
    console.log("MatchButton render() with names: " + this.firstName + ", " + this.lastName)
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
          <Button title="Check In" onPress={this.release}/>
        </View>
      </View>
    )
  }


    /*
  render() {
    const name = this.props.name
    console.log("matchbutton " + name);
    return (
      <div>
        <Text
          style={{
            fontSize: 25,
          }}>
          { name }
        </Text>
      </div>
    )
  }
  */
}
