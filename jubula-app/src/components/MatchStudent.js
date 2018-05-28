import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native';

class MatchButton extends React.Component {

  constructor(props) {
    super(props)
    this.checkIn = this.checkIn.bind(this)
    this.checkInNet = this.checkInNet.bind(this)
  }


   checkIn() {
     console.log("checkIn");
   }

   checkInNet() {
     //const nn = Object.values(sname)
    //const nn = sname
     //console.log("checkIn for " + nn)
    console.log("checkIn")
    return fetch('http://google.com?q=foo', {
      method: 'GET',
    })
      .then((response) => {
        console.log("fetch response: " + response);
    });
  }


  render() {
    return (
      <View style={{
        backgroundColor:'#778899',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        //borderWidth:2,
      }}>

        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          margin: 3,
        }}>
          <Text style={{
              color: '#FFFFFF'
            }}>
            {this.props.name}
          </Text>
        </View>

        <View style={{
          flex: 0.8,
          margin: 3,
        }}>
          <Button title="Check In" onPress={console.log('foo')}/>
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
    console.log("StudentMatch render(), matches prop: " + this.props.matches)
    console.log("matches type: " + typeof this.props.matches);
    console.log("matches length: " + this.props.matches.length);
    let matches = []

    if (this.props.matches.length > 0) {
       matches = this.props.matches.map((stu) => {
        return <ul> {stu} </ul>
      })
    }
    //console.log("matches: " + JSON.stringify(matches))
    console.log("matches: " + matches)

    return (
      <div>
        {
          matches.map((sname) => {
            return <MatchButton name={sname}/>
          })
        }
      </div>
    );
  }
}

