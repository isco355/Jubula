import React from 'react'
import { StyleSheet, Text, Button } from 'react-native';

import CheckInBox from './CheckInBox'


class MatchButton extends React.Component {
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
}


export default class Output extends React.Component {

  checkIn(sname) {
    const nn = Object.values(sname)
    //const nn = sname
    console.log("checkIn for " + nn)
  }


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
            return <MatchButton name={sname} />
          })
        }
      </div>
    );
  }
}
