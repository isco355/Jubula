import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native';

class MatchButton extends React.Component {

  constructor(props) {
    super(props)
    this.firstName = this.props.firstName
    this.lastName = this.props.lastName
    this.studentId = this.props.id

    this.checkIn = this.checkIn.bind(this)
  }

  checkIn() {
    return fetch('http://localhost:9292/checkIn/' + this.studentId, {
      method: 'GET',
    })
      .then((response) => response.json()
      .then((json) => {
        console.log("fetch response: " + JSON.stringify(json))
       })
     )
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
          <Button title="Check In" onPress={this.checkIn}/>
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


export default class StudentMatch extends React.Component {

  render() {
    //console.log("StudentMatch render(), matches prop: " + this.props.matches)
    //console.log("matches type: " + typeof this.props.matches);
    //console.log("matches data: " + JSON.stringify(this.props.matches))
    console.log("StudentMatch matches length: " + this.props.matches.length);

    return (
      <div>
        {
          this.props.matches.map((pair) => {
            const data = pair[1]
            console.log("StudentMatch pair: " + JSON.stringify(pair[1]));
            return <MatchButton id={data.id} firstName={data.firstName} lastName={data.lastName}/>
          })
        }
      </div>
    );
  }
}
