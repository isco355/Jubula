import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class DropOffInfoBox extends React.Component {
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
