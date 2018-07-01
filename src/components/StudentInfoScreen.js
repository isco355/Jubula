import React from 'react'
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class StudentInfoScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      studentData: [],
    }

  }


  componentDidMount() {
    console.log("StudentInfoScreen DidMount() with data: " + JSON.stringify(this.props.studentData));
    this.setState({ studentData: this.props.studentData })
  }


  render() {
    const arr = Object.entries(this.state.studentData)
    console.log("arr: " + arr);

    return (
      <View style={{
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
     </View>
    )
  }
}
