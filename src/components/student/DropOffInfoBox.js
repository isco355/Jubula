import React from 'react'
import MDSpinner from "react-md-spinner";
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native'
import { utils, RuuiProvider, Button, Tooltip } from 'react-universal-ui'


export default class DropOffInfoBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: null,
      editing: false,
    }


    this.editDropoff = this.editDropoff.bind(this)
  }

  componentDidMount() {
    const sd = this.props.studentData
    this.setState({
      name: sd.droppedOffByName,
    })
  }

  editDropoff() {
    console.log("editDropoff()");
    this.setState({ editing: true })
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
        }}
      >
          <Text style={{
            fontSize: 24,
          }}
          >
            Expecting drop off by:
            {"\n"}

              { this.state.editing
                  ? <EditDropOffInfoBox data={this.state} />
                  : <DropOffInfoDisplay data={this.state} lever={this.editDropoff} />
              }

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


class DropOffInfoDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{
        flexDirection: 'row',
      }}>

        <Text style={{fontSize: 16}}> {this.props.data.name} </Text>
        <Button title="Change" onPress={this.props.lever} />
      </View>
    )
  }
}


class EditDropOffInfoBox extends React.Component {

  render() {
    return (
      <View style={{
        flexDirection: 'row',
      }}>

        <Text style={{fontSize: 16}}> Foo Bar Baz </Text>
      </View>
    )
  }


}
